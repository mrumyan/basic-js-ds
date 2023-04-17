const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(l, k) {
  if (!l) {
    return null;
  }

  if (l.value === k) {
    return removeKFromList(l.next, k);
  } else {
    l.next = removeKFromList(l.next, k);
  }

  return l;
}

module.exports = {
  removeKFromList
};
