const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas
mongoose.connect('http://locaalhost/3000', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const productSchema = new mongoose.Schema({
    sku: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    productDescription: String,
    images: [String], // Assuming images are stored as an array of strings (file paths or URLs)
  });

const User = mongoose.model('User', productSchema);

// Middleware
app.use(express.json());

// API endpoint to add new product
app.post('/addNewProduct', async (req, res) => {
  try {
    const { sku, name, qty,productdescription, images } = req.body;

    // Create a new user
    const newUser = new User({ sku, name, qty,productdescription, images });

    // Save the user to the db
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// edit product details
app.put('/editproduct/:sku', async (req, res) => {
    try {
      const { sku } = req.params;
      const { name, qty, productDescription, images } = req.body;
  
      
      const product = await Product.findOne({ sku });
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Update the product details
      product.name = name;
      product.qty = qty;
      product.productDescription = productDescription;
      product.images = images;
  
      // Save the updated product
      await product.save();
  
      res.status(200).json({ message: 'Product updated successfully', product });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

//Checking t he server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
