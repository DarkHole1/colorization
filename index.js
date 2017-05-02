const csi = String.fromCharCode(27) + '[';
const log = a => console.log(csi + a);
const def = (a, b) => a != undefined ? a : b;
const colors = {
  'black': 0,
  'red': 1,
  'green': 2,
  'yellow': 3,
  'blue': 4,
  'magenta': 5,
  'cyan': 6,
  'white': 7
}
// Holy random, will it works or not?
module.exports = {
  'cursor': {
    'hide': () => log('?25l'),
    'show': () => log('?25h'),
    'save': () => log('s'),
    'restore': () => log('u'),
    'report': () => log('6n'), // I don't know how use it too
    'up': n => log(`${def(n, '')}A`),
    'down': n => log(`${def(n, '')}B`),
    'forward': n => log(`${def(n, '')}C`),
    'back': n => log(`${def(n, '')}D`),
    'next': n => log(`${def(n, '')}E`),
    'previous': n => log(`${def(n, '')}F`),
    'column': n => log(n + 'G'),
    'position': (x, y) => log(def(x, '') + ';' + def(y, '') + 'A'),
  },
  'erase': {
    'all': n => log(n + 'J'),
    'line': n => log(n + 'K')
  },
  'scroll': {
    'up': n => log(def(n, '') + 'S'),
    'down': n => log(def(n, '') + 'T')
  },
  'graphic': function() { log([].join.call(arguments, ';') + m) }
  'color': {
    'reset': () => log('0m'),
    'bold': () => log('1m'),
    'faded': () => log('2m'),
    'italic': () => log('3m'),
    'underlined': () => log('4m'), // 21 is the same
    'blinking': () => log('5m'),
    'invert': () => log('7m'),
    'hide': () => log('8m'), // ??? PROFIT!
    'striked': () => log('9m'),
    'unbold': () => log('22m'),
    'unitalic': () => log('23m'),
    'ununderlined': () => log('24'),
    'unblinking': () => log('25m'),
    'normal': () => log('27m'),
    'show': () => log('28m'),
    'unstriked': () => log('29m'),
    'foreground': {
      'name': c => log(30 + colors[c] + 'm'),
      'high': c => log(90 + colors[c] + 'm'),
      'index': i => log('38;5;' + i + 'm'),
      'any': (r, g, b) => log(`38;2;${r};${g};${b}m`),
      'default': () => log('39m')
    },
    'background': {
      'name': c => log(40 + colors[c] + 'm'),
      'high': c => log(100 + colors[c] + 'm'),
      'index': i => log('48;5;' + i + 'm'),
      'any': (r, g, b) => log(`48;2;${r};${g};${b}m`),
      'default': () => log('49m')
    }
  }
}
