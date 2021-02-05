# 3. Classification and Convolution Neural Networks

---

# Classification

---

## Classification

Logistic regression - the output is a confidence probability between $0$ (false) and $1$ (true).

<img src="assets/img/classification-logisticregression.svg"  style="background: white; width: 70%"/>

---


## Classification

One output node per category.

<object type="image/svg+xml" data="assets/img/neuralnetwork-output2.svg" style="background: white; width: 70%; height: auto;">
</object>

---

## Classification outputs
For two categories, we an output vector size of **2**. Since its probabilities, we want the output vector to sum up to $1.0$.

<object type="image/svg+xml" data="assets/img/classification-onehot-probabiitysum.svg" style="background: white; width: 70%; height: auto;">
<param id="layer2" class="fragment" data-fragment-index="1" />
</object>

---

## Softmax
Bound output with **sigmoid** and **normalise**.

<object type="image/svg+xml" data="assets/img/classification-softmax.svg" style="background: white; width: 70%; height: auto;">
</object>

---

## Classification labels

So what should our **labels/targets** look like?

<object type="image/svg+xml" data="assets/img/classification-onehot-cat.svg" style="background: white; width: 70%; height: auto;">
<param id="layer2" class="fragment" data-fragment-index="1" />
</object>

---

## Classification labels

What would be the **target** if we're classifying a dog?

<object type="image/svg+xml" data="assets/img/classification-onehot-dog.svg" style="background: white; width: 70%; height: auto;">
<param id="layer2" class="fragment" data-fragment-index="1" />
</object>

---

## One-hot encoding
Encode categories into vector form. Only **one** category should be **true**, hence **one-hot**.

<object type="image/svg+xml" data="assets/img/classification-onehot-3class.svg" style="background: white; width: 70%; height: auto;">
</object>


---

## Cross Entropy Loss

Larger penalty for classifying the wrong category.

```python
def get_entropy_loss(y, y_hat):
  if y ==1 :
    # Target is true
    return -math.log(y_hat)
  else:
    # Target is false
    return -math.log(1-y_hat)
```

---

## Cross Entropy Loss

Larger penalty for classifying the wrong category.

<img src="assets/img/classification-crossentropy.png"  style="background: white; width: 70%"/>

---

## Cross Entropy Loss vs Squared Loss

Larger penalty for classifying the wrong category.

<img src="assets/img/classification-crossentropy-squaredloss.png"  style="background: white; width: 70%"/>

---

## Cross Entropy Loss

Several types of cross entropy loss available in `tf.keras`:

* **BinaryCrossentropy** - When there's **only** 2 labels, expects **one-hot** labels.
* **CategoricalCrossentropy** - When there's **2 or more** labels, expects **one-hot** labels.
* **SparseCategoricalCrossentropy** - When there's **2 or more** labels, expects **single integer** labels representing category.

---

# Convolution Neural Networks

---

## Building a deep network

Stack layers between `Input` and `Output` layers. 

<object type="image/svg+xml" data="assets/img/neuralnetwork-term.svg" style="background: white; width: 50%; padding: 1em">
<param id="layer2" class="fragment" data-fragment-index="1" />
<param id="layer3" class="fragment" data-fragment-index="2" />
<param id="layer4" class="fragment" data-fragment-index="4" />
<param id="layer5" class="fragment" data-fragment-index="3" />
</object>

---

## Fully connected/Dense layers

Each node in layer is connected to **every node** in the **previous** layer.

<object type="image/svg+xml" data="assets/img/convolution-dense2.svg" style="background: white; width: auto; height: auto;">
<param id="layer2" class="fragment" data-fragment-index="1" />
</object>


---

## Convolution Layer

* Connect to a subset of nodes in the previous layer
* Each layer can have multiple filters
* Each filter detects a single feature across the entire input space
    * `Kernel size` and `stride` used to control the convolution process

---

## Convolution Layer

<object type="image/svg+xml" data="assets/img/convolution-1d.svg" style="background: white; width: auto; height: auto;">
<param id="layer3" class="fragment " data-fragment-index="1" />
<param id="layer2" class="fragment fade-in-then-out" data-fragment-index="2" />
<param id="layer4" class="fragment fade-in-then-out" data-fragment-index="3" />
<param id="layer5" class="fragment fade-in-then-out" data-fragment-index="4" />
</object>

---

## Convolution in 2D

We arrange our input nodes as a grid to match our input image.

<object type="image/svg+xml" data="assets/img/convolution-gridinput.svg" style="background: white; width: auto; height: auto;">
<param id="layer1" class="fragment fade-in-then-out" data-fragment-index="1" />
<param id="layer2" class="fragment fade-in-then-out" data-fragment-index="2" />
<param id="layer3" class="fragment fade-in" data-fragment-index="3" />
</object>

---

## Convolution in 2D

Here's an example of a smaller convolution network (LeNet).

<object type="image/svg+xml" data="assets/img/lenet.svg" style="background: white; width: auto; height: auto;">
</object>

Each convolution layer has a number of filters, their outputs are represented as stacks of images.

---

## The convolution process

<object type="image/svg+xml" data="assets/img/convolution-process.svg" style="background: white; width: auto; height: auto;">
<param id="layer2" class="fragment fade-in-then-out" data-fragment-index="2" />
<param id="layer3" class="fragment fade-in-then-out" data-fragment-index="3" />
<param id="layer4" class="fragment fade-in-then-out" data-fragment-index="4" />
<param id="layer5" class="fragment fade-in-then-out" data-fragment-index="5" />
<param id="layer6" class="fragment fade-in-then-out" data-fragment-index="6" />
<param id="layer7" class="fragment fade-in-then-out" data-fragment-index="7" />
<param id="layer8" class="fragment fade-in-then-out" data-fragment-index="8" />
<param id="layer9" class="fragment fade-in-then-out" data-fragment-index="9" />
<param id="layer10" class="fragment fade-in-then-out" data-fragment-index="10" />
</object>
