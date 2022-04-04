---
title: "6. DL In other fields & Conclusion"
---

# 6. DL In other fields & Conclusion

---

### Lesson contents

* DL in other fields
  * Autoencoders
  * DL in Natural Language Processing (NLP)
    * Word embeddings
    * RNNs & LSTM
    * Transformers
  * Generative adversarial networks
  * Reinforcement learning
* Conclusion

---

### DL In other fields

We've been using CNNs for image classification. <!-- .element: class="fragment" --> 

Different architectures can be used to handle each domain's specific challenges and datatypes. <!-- .element: class="fragment" --> 

---

### Autoencoders

An `unsupervised` network that tries to recreate its input.

<object type="image/svg+xml" data="assets/img/autoencoder.svg" style="background: white; width: 60%; height: auto;">
<param id="layer2" class="fragment" data-fragment-index="1" />
<param id="layer3" class="fragment" data-fragment-index="2" />
<param id="layer4" class="fragment" data-fragment-index="3" />
<param id="layer5" class="fragment" data-fragment-index="4" />
</object>

---

### Autoencoders

They can be used for:

* Dimentionality reduction
* Denoising

---

### DL in Natural Language Processing (NLP) - From words to numbers

In NLP, it is common to have sequence of words as input and output. 

It's common practice to tokenize and index every word.

<object type="image/svg+xml" data="assets/img/word-to-index.svg" style="background: white; width: 60%; height: auto;">
<param id="layer2" class="fragment" data-fragment-index="1" />
<param id="layer3" class="fragment" data-fragment-index="2" />
<param id="layer4" class="fragment" data-fragment-index="3" />
<param id="layer5" class="fragment" data-fragment-index="4" />
</object>

---

### Word embeddings

Reduce dimensionality, map relationships between words.

<object type="image/svg+xml" data="assets/img/embedding-transformation.svg" style="background: white; width: auto; height: auto;">
</object>

---

### Word embeddings

Reduce dimensionality, map relationships between words.

<object type="image/svg+xml" data="assets/img/glove-embedding.svg" style="background: white; width: 70%; height: auto;">
</object>

---

### Creating embedding from an n-gram network. 

A very simple way to create an embedding vector is to make an n-gram network which predicts the next word in the sentence.

<object type="image/svg+xml" data="assets/img/ngram-network.svg" style="background: white; width: 50%; height: auto;">
<param id="layer2" class="fragment fade-in-then-out" data-fragment-index="1" />
<param id="layer3" class="fragment fade-in-then-out" data-fragment-index="2" />
<param id="layer4" class="fragment fade-in-then-out" data-fragment-index="3" />
<param id="layer5" class="fragment fade-in-then-out" data-fragment-index="4" />
<param id="layer6" class="fragment fade-in-then-out" data-fragment-index="5" />
<param id="layer7" class="fragment fade-in-then-out" data-fragment-index="6" />
<param id="layer8" class="fragment fade-in-then-out" data-fragment-index="7" />
<param id="layer9" class="fragment" data-fragment-index="8" />
</object>

---

### RNNs and LSTMs for sequential inputs & outputs

RNNs are like a `for` loop in your network and allows for sequential input and output.

<object type="image/svg+xml" data="assets/img/rnns.svg" style="background: white; width: 70%; height: auto;">
</object>

---

### RNNs and LSTMs for sequential inputs & outputs

LSTMs (Long Short Term Memory) includes additional operations to solve `vanishing gradient` problem in standard `RNNs`.

<object type="image/svg+xml" data="assets/img/rnn-lstm.svg" style="background: white; width: 40%; height: auto;">
</object>

---

### Transformers

Newer language models are moving away from RNNs in favour of Transformers e.g. BERT, GPT.

<object type="image/svg+xml" data="assets/img/transformer.svg" style="background: white; width: 70%; height: auto;">
</object>

---

### Transformers

Newer language models are moving away from RNNs in favour of Transformers e.g. BERT, GPT.

<object type="image/svg+xml" data="assets/img/transformer-zoom.svg" style="background: white; width: 70%; height: auto;">
</object>

---

### Self-attention

A way of mapping how relevant other words are in relation to the current word:

<img src="assets/img/self-attention.webp" style="width: auto; height: auto;" />

[https://www.analyticsvidhya.com/blog/2019/06/understanding-transformers-nlp-state-of-the-art-models/](https://www.analyticsvidhya.com/blog/2019/06/understanding-transformers-nlp-state-of-the-art-models/) <!-- .element: class="small-note" -->

---

### Generative Adversarial Network

Generator generates random images from noise. Discriminator tries to distinguish whether image is real or fake.

<object type="image/svg+xml" data="assets/img/gan.svg" style="background: white; width: 70%; height: auto;">
<param id="layer2" class="fragment fade-in-then-out" data-fragment-index="1" />
</object>

---

### Reinforcement Learning

<object type="image/svg+xml" data="assets/img/reinforcement-learning.svg" style="background: white; width: 50%; height: auto;">
</object>

---

## Conclusion

---

### Conclusion

We've learned about all the components needed to put together a CNN for image classification. 
This is just the start!

---

### Using DL in your own project

* Use existing libraries - Many exist for object detection, machine translation, etc. 
* Use pre-trained models or start with existing networks.
* Version control your code, models, and data (e.g. git, git LFS, dvc, etc.).
* Various HPC resources available to Sheffield researchers:
  * [Sharc](https://docs.hpc.shef.ac.uk/en/latest/sharc/index.html) & [Bessemer](https://docs.hpc.shef.ac.uk/en/latest/bessemer/index.html)
  * [JADE](https://docs.hpc.shef.ac.uk/en/latest/jade.html) & [JADE 2 (Coming soon)](https://docs.hpc.shef.ac.uk/en/latest/jade2.html)
  * [Bede](https://docs.hpc.shef.ac.uk/en/latest/bede.html)

---

### Where to go from here?

* Try [Tensorflow tutorials](https://www.tensorflow.org/tutorials) that suits your field/interest.
* Visit our [RSE DL page for links to DL resources](https://rse.shef.ac.uk/training/deeplearning/).

---

<!-- .slide: data-background="assets/img/rse-logo.svg" -->
<!-- .slide: data-background-opacity="0.2" -->

### Research Software Engineering Sheffield

* Increasing research impact through software
* Support and consultancy in research software and systems development and maintenance
    * Grant support
* Software optimisation, GPU and HPC
* Training, outreach and education activities
* Led by Dr. Paul Richmond
* Visit us at [https://rse.shef.ac.uk](https://rse.shef.ac.uk)

---

<!-- .slide: data-background="assets/img/rse-logo.svg" -->
<!-- .slide: data-background-opacity="0.2" -->

# Thank you for attending!

