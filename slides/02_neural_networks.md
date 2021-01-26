# 2. Neural Networks

---

## Artificial Neural Networks 

Artificial neural networks are inspired by biological neural networks found in animal brains.

<img src="assets/img/neuron.svg"  style="background: white; padding: 1em; width:25%"/>


---

## An artificial neuron
Behaviour is simplified compared to their biological counterparts...

<img src="assets/img/artificial-neuron.svg"  style="background: white; padding: 1em; width:25%"/>

Inputs ($x_{n}$) are multiplied with weights ($w_{n}$) and summed together with the bias ($b$).




---

## An artificial neuron
Behaviour is simplified compared to their biological counterparts...

<img src="assets/img/artificial-neuron.svg"  style="background: white; padding: 1em; width:25%"/>

$$
x_{1}w_{1}+x_{2}w_{2}+x_{3}w_{3}+b=y
$$


---

## A Neural Network
A neural network is simply a network of (artificial) neurons with distinct layers. 


<img src="assets/img/neuralnetwork-plain2.svg"  style="background: white; padding: 1em;"/>

---

## A Neural Network

The network is `acyclic`. Data is fed into the `Input` layer and prediction comes out at the `Output` layer. Any layers in-between is called the `Hidden` layer.


<object type="image/svg+xml" data="assets/img/neuralnetwork-term.svg" style="background: white; width: 50%; padding: 1em">
<param id="layer2" class="fragment" data-fragment-index="1" />
<param id="layer3" class="fragment" data-fragment-index="2" />
<param id="layer4" class="fragment" data-fragment-index="4" />
<param id="layer5" class="fragment" data-fragment-index="3" />
</object>

---


## Network inputs

One scalar value per node

<img src="assets/img/neuralnetwork-input.svg"  style="background: white; padding: 1em;"/>

---

## Network inputs

One scalar value per node... e.g. house price features

<img src="assets/img/neuralnetwork-input2.svg"  style="background: white; padding: 1em;"/>


---

## Network inputs

Or images, one node per pixel (greyscale)

<object type="image/svg+xml" data="assets/img/neuralnetwork-input3.svg" style="background: white; width: 50%; padding: 1em">
<param id="layer1" class="fragment" data-fragment-index="1" />
<param id="layer2" class="fragment" data-fragment-index="2" />
<param id="layer3" class="fragment" data-fragment-index="3" />
</object>

---

## Network inputs

You can also think of images as a grid of input nodes.

<object type="image/svg+xml" data="assets/img/neuralnetwork-input4.svg" style="background: white; width: 80%; padding: 1em">
<param id="layer1" class="fragment fade-out" data-fragment-index="1" />
<param id="layer6" class="fragment" data-fragment-index="2" />
</object>

---

## Network inputs

What about colour images?

---

## Network inputs

What about colour images?

<object type="image/svg+xml" data="assets/img/neuralnetwork-input5.svg" style="background: white; width: 80%; padding: 1em">
<param id="layer1" class="fragment fade-out" data-fragment-index="1" />
<param id="layer2" class="fragment fade-in-then-semi-out" data-fragment-index="2" />
<param id="layer3" class="fragment fade-in" data-fragment-index="3" />
</object>


For RGB images, no. of input nodes are  `$ width*height*channels $` 
<!-- .element: class="fragment" -->

---

## Network outputs

One scalar value per output node, e.g. house price prediction.

<img src="assets/img/neuralnetwork-output1.svg"  style="background: white; width: 50%"/>


---

## Network outputs

When performing categorisation, we need one output node per category.

<img src="assets/img/neuralnetwork-output2.svg"  style="background: white; width: 70%"/>

---

## Error and Loss

<img src="assets/img/artificial-neuron.svg"  style="background: white; padding: 1em; width:25%"/>

$$
x_{1}w_{1}+x_{2}w_{2}+x_{3}w_{3}+b=y
$$



---

## Getting the right output

Neural network weights ($w$) and bias ($b$) are initialised at random.

<img src="assets/img/artificial-neuron-learning.svg"  style="background: white; padding: 1em;"/>

The weights are then changed so that our `Output` is closer to the `Target`, minimising our `Error`

---

## Getting the right output

Let's try increasing $w_{1}$...

<img src="assets/img/artificial-neuron-learning2.svg"  style="background: white; padding: 1em;"/>

You'll see that error is increased from $9$ to $15$.

---

## Getting the right output

Now try decreasing $w_{1}$...

<img src="assets/img/artificial-neuron-learning3.svg"  style="background: white; padding: 1em;"/>

We've gotten nearer to our target, now we know to keep decreasing the weight.

---

## Gradient descent

Finding current loss gradient for ALL weights and changing the weights gradually to keep minimising error.

<img src="assets/img/gradient-descent.svg"  style="background: white; padding: 0.5em; width: 25%"/>

Above example shows the gradient descent process if we only have a single weight.

---

## Getting the right output (Sample 2)

With the next sample, the `Input` and `Target` has now changed... 

<img src="assets/img/artificial-neuron-learning4.svg"  style="background: white; padding: 1em;"/>

We need to minimise error for all samples.

---

## Neural Network Training Cycle

<object type="image/svg+xml" data="assets/img/neuralnetwork-training.svg" style="background: white; width: 50%">
<param id="layer2" class="fragment" data-fragment-index="2" />
<param id="layer3" class="fragment" data-fragment-index="3" />
<param id="layer4" class="fragment" data-fragment-index="4" />
</object>


 

---

## Neural Network Training Cycle

1. Forward propagation - Pass in data from sample
1. Calculate loss - compare output with target/label
1. Back propagation - change weights in the network to minimise error/loss
1. Repeat with different sample

---

## Activation functions

You might have noticed that our neural network is linear

<img src="assets/img/artificial-neuron.svg"  style="background: white; padding: 1em; width:25%"/>

$$
x_{1}w_{1}+x_{2}w_{2}+x_{3}w_{3}+b=y
$$

---

## Activation functions

But most real-world problems are non-linear

Sigmoid

ReLU

---

## Activation functions - Sigmoid


---

## Activation functions - ReLU




---

## Categorisation
