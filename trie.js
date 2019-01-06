
function TrieNode() {
    this.is_prefix = false;
    this.is_end_of_word = false;
    this.child = {};
}

// Implement Trie using one root.
function Trie() {
    this.root = new TrieNode();
}

// Insert word into the Trie.
Trie.prototype.insert = function(word) {
    // Start at the root
    var node = this.root;

    word_length = word.length;
    word = word.toUpperCase();

    // Check if each letter in word has existing child node
    for (var i = 0; i < word_length; i++) {
        if (!node.child[word[i]]) {
            // Create new child node if letter does not already have existing child node
            node.child[word[i]] = new TrieNode(word[i]);
            // Mark the child as a prefix
            node.child[word[i]].is_prefix = true;
            // Iterate down to the next letter of the word
            node = node.child[word[i]];        
        }
    }
    // Once iteration reaches the last letter of the word, mark it as the end of the word
    node.is_prefix = false;
    node.is_end_of_word = true;
}

// Determine if word exists in the Trie
Trie.prototype.is_word = function(word) {
    // Start at the root
    var node = this.root;

    word_length = word.length;
    word = word.toUpperCase();

    for (var i = 0; i < word_length; i++) {
        // If child exists, iterate down to the next letter of the word. 
        if (node.child[word[i]]) {
            node = node.child[word[i]];
        }
        // Else, end here and return false.
        else {
            return false;
        }
    }
    // If the iteration reaches the end of the word, return bool value of that node signifying the end of the word.
    return node.is_end_of_word;
}

// Determine if word (or subword) is a prefix
Trie.prototype.is_prefix = function(word) {
    // Start at the root
    var node = this.root;

    word_length = word.length;
    word = word.toUpperCase();

    for (var i = 0; i < word_length; i++) {
        // If child exists, iterate down to the next letter of the word.
        if (node.childd[word[i]]) {
            node = node.child[word[i]];
        }
        // Else, end here and return false.
        else {
            return false;
        }
    }
    // If the iteration reaches the end of the word, return bool value of that node signifying if word is a prefix.
    return node.is_prefix;
}
