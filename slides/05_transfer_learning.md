---
title: "5. Deployment and Transfer Learning"
---

# 5. Deployment and Transfer Learning

---

### Course Materials

All course materials can be found at:

[https://rses-dl-course-ukhsa.github.io/](https://rses-dl-course-ukhsa.github.io/)

---

### Course Schedule

* **Day one**
  * **13:00-14:10** | 01: Introduction to Deep Learning
  * **14:10-14:25** | Break
  * **14:25-15:35** | 02: Neural Networks
  * **15:35-15:50** | Break
  * **15:50-17:00** | 03: Classification and Convolutional Neural Networks
  
---

### Course Schedule

* **Day two**
  * **13:00-14:30** | 04: Refining the model
  * **14:30-14:45** | Break
  * **14:45-15:30** | 05: Deployment & Transfer Learning
  * **15:30-16:00** | 06: DL in other fields
  * **16:00-16:15** | Break
  * **16:15-17:00** | 07: Final Exercise & Wrap-up
  
---


### Lesson contents

* Saving and checkpointing your network
* Considerations for deploying your model
* Transfer learning and fine-tuning

---

### Neural networks as part of a system

Once trained, NNs can be used as a part of a larger system.

<object type="image/svg+xml" data="assets/img/nn-systems.svg" style="background: white; width: 80%; height: auto;">
</object>

---

### Saving and loading

A neural network consists of a network graph and its weights and bias.

<object type="image/svg+xml" data="assets/img/savemodel.svg" style="background: white; width: 80%; height: auto;">
</object>

Tensorflow can save the complete model in its own format `.tf` or Keras using HDF 5 `.h5`.

---

### Save your work! Checkpoint while training

When training large models or for many epochs, checkpoint your model. 

We're only saving the model's `weigths` as we have the code to build the network graph. 

* Use `Model.save_weight()` and manage your checkpoint manually
* Use `tf.keras.callbacks.ModelCheckpoint` to automatically create checkpoint files 

---

### Deployment

How and where will your model run?

* Embedded systems, e.g. drones, mobiles?
  * [Tensorflow Lite](https://www.tensorflow.org/lite/) 
* On desktop or as part of another software?
  * Using tensorflow directly
* On the server doing high volume inferencing?
  * [Tensorflow serve](https://www.tensorflow.org/tfx)
  * High Performance Computing (HPC)
  * Cloud service providers
* For systems with Nvidia GPU
  * [TensorRT](https://developer.nvidia.com/TensorRT)
    

---

### Deployment


<object type="image/svg+xml" data="assets/img/ml-deployment.svg" style="background: white; width: 60%; height: auto;">
</object>


---

### Transfer Learning 
Deep neural networks learn larger and more abstract features deeper into the network.

<object type="image/svg+xml" data="assets/img/convolution-hierachy.svg" style="background: white; width: 60%; height: auto;">
</object>

---

### Transfer Learning 
The learned features can be re-used in a different classifier.

<object type="image/svg+xml" data="assets/img/transfer-convolution-hierachy.svg" style="background: white; width: 60%; height: auto;">
</object>

---

### Transfer learning

Pre-trained models can be obtained from places such as [Tensorflow hub](https://tfhub.dev/). 

With a little surgery, they can be converted to fit your dataset.

---

### Transfer learning

For example, the mobilenet model trained on imagenet data:
* Imagenet 2012 dataset provides a collection of 150,000 photographs labelled under 1,000 categories.
* Mobilenet has 28 layers with a total of 2,257,984 parameters.

---

### Transfer learning

To perform transfer learning:

* Pre-trained models can be imported and added as a `KearsLayer`
* A dense classifier is then added with our new categories
* **Freeze** the pretrained network and train **only** our classifier.

---

### Transfer learning - fine tuning

Accuracy can be further training the **entire** model, but with a very small learning rate.

* Unfreeze the pre-trained model and train again on our dataset.

---

## Lab 05 & 06: Transfer learning and saving your models




