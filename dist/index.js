'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = {
  renderMark: function renderMark(inProps, inEditor, inNext) {
    var children = inProps.children,
        attributes = _objectWithoutProperties(inProps, ['children']);

    var href = inProps.node.data.get('href');
    var target = inProps.node.data.get('target') || '_blank';
    switch (inProps.mark.type) {
      case 'link':
        return React.createElement(
          'a',
          _extends({ href: href, target: target }, attributes, { className: 'slate-plugin-link-node' }),
          children
        );
      default:
        return inNext();
    }
  }
};