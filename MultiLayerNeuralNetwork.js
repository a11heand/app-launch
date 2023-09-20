/* Filename: MultiLayerNeuralNetwork.js */

// Multilayer Neural Network with Backpropagation Algorithm

// Define the Neural Network class
class NeuralNetwork {
  constructor(inputSize, hiddenLayers, outputSize) {
    this.inputSize = inputSize;
    this.hiddenLayers = hiddenLayers;
    this.outputSize = outputSize;
    this.weights = [];
    this.biases = [];

    // Initialize weights and biases with random values
    for (let i = 0; i < hiddenLayers.length + 1; i++) {
      if (i === 0) {
        this.weights.push(
          this.generateMatrix(inputSize, hiddenLayers[i])
        );
        this.biases.push(this.generateMatrix(1, hiddenLayers[i]));
      } else if (i === hiddenLayers.length) {
        this.weights.push(
          this.generateMatrix(hiddenLayers[i - 1], outputSize)
        );
        this.biases.push(this.generateMatrix(1, outputSize));
      } else {
        this.weights.push(
          this.generateMatrix(hiddenLayers[i - 1], hiddenLayers[i])
        );
        this.biases.push(this.generateMatrix(1, hiddenLayers[i]));
      }
    }
  }

  generateMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = Math.random() * 2 - 1; // Random values between -1 and 1
      }
    }
    return matrix;
  }

  activationFunction(x) {
    return 1 / (1 + Math.exp(-x));
  }

  feedForward(input) {
    let output = input;

    for (let i = 0; i < this.hiddenLayers.length + 1; i++) {
      output = this.matrixMultiply(output, this.weights[i]);
      output = this.matrixAdd(output, this.biases[i]);
      output = this.applyActivation(output);
    }

    return output;
  }

  matrixMultiply(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
      result[i] = [];
      for (let j = 0; j < b[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < a[0].length; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }

  matrixAdd(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
      result[i] = [];
      for (let j = 0; j < a[0].length; j++) {
        result[i][j] = a[i][j] + b[i][j];
      }
    }
    return result;
  }

  applyActivation(matrix) {
    const result = [];
    for (let i = 0; i < matrix.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix[0].length; j++) {
        result[i][j] = this.activationFunction(matrix[i][j]);
      }
    }
    return result;
  }

  // More functions for backpropagation, training, etc...
  // ...
  // ...
}

// Example usage:

const neuralNetwork = new NeuralNetwork(2, [4, 3], 3);

const input = [[0, 0], [0, 1], [1, 0], [1, 1]];
for (const inp of input) {
  console.log(
    `Input: ${inp}, Output: ${neuralNetwork.feedForward(inp)}`
  );
}
