__d(
  "LexicalExtensionBlockIdExtension.prod",
  [
    "Lexical",
    "LexicalExtensionGetExtensionDependency",
    "LexicalExtensionNamedSignals",
    "LexicalExtensionSignals",
  ],
  function $module_LexicalExtensionBlockIdExtension_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _excluded = ["blockId"];
    function s(e) {
      throw new Error(e);
    }
    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
      r = [
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ];
    function l(e, t) {
      return (e >>> t) | (e << (32 - t));
    }
    function c(e, t, n, o) {
      for (var _e = 0; _e < 16; _e++) {
        var _s = o + 4 * _e;
        t[_e] =
          (n[_s] << 24) | (n[_s + 1] << 16) | (n[_s + 2] << 8) | n[_s + 3];
      }
      for (var _e2 = 16; _e2 < 64; _e2++) {
        var _n = t[_e2 - 15],
          _o = t[_e2 - 2],
          _s2 = l(_n, 7) ^ l(_n, 18) ^ (_n >>> 3),
          _i = l(_o, 17) ^ l(_o, 19) ^ (_o >>> 10);
        t[_e2] = (t[_e2 - 16] + _s2 + t[_e2 - 7] + _i) | 0;
      }
      var s = e[0],
        i = e[1],
        c = e[2],
        d = e[3],
        u = e[4],
        a = e[5],
        f = e[6],
        g = e[7];
      for (var _e3 = 0; _e3 < 64; _e3++) {
        var _n2 =
            (g +
              (l(u, 6) ^ l(u, 11) ^ l(u, 25)) +
              ((u & a) ^ (~u & f)) +
              r[_e3] +
              t[_e3]) |
            0,
          _o2 = (s & i) ^ (s & c) ^ (i & c);
        ((g = f),
          (f = a),
          (a = u),
          (u = (d + _n2) | 0),
          (d = c),
          (c = i),
          (i = s),
          (s = (_n2 + (((l(s, 2) ^ l(s, 13) ^ l(s, 22)) + _o2) | 0)) | 0));
      }
      ((e[0] = (e[0] + s) | 0),
        (e[1] = (e[1] + i) | 0),
        (e[2] = (e[2] + c) | 0),
        (e[3] = (e[3] + d) | 0),
        (e[4] = (e[4] + u) | 0),
        (e[5] = (e[5] + a) | 0),
        (e[6] = (e[6] + f) | 0),
        (e[7] = (e[7] + g) | 0));
    }
    var d = null,
      u = null,
      a = null,
      f = null;
    function g(e) {
      var t = e.length,
        n = f || (f = new Int32Array(8));
      ((n[0] = 1779033703),
        (n[1] = 3144134277),
        (n[2] = 1013904242),
        (n[3] = 2773480762),
        (n[4] = 1359893119),
        (n[5] = 2600822924),
        (n[6] = 528734635),
        (n[7] = 1541459225));
      var o = d || (d = new Int32Array(64)),
        s = t - (t % 64);
      for (var _t = 0; _t < s; _t += 64) c(n, o, e, _t);
      var i = u || (u = new Uint8Array(128)),
        r = t - s < 56 ? 64 : 128;
      (i.fill(0), i.set(e.subarray(s)), (i[t - s] = 128));
      var l = Math.floor(t / 536870912),
        a = (8 * t) >>> 0;
      ((i[r - 8] = l >>> 24),
        (i[r - 7] = l >>> 16),
        (i[r - 6] = l >>> 8),
        (i[r - 5] = l),
        (i[r - 4] = a >>> 24),
        (i[r - 3] = a >>> 16),
        (i[r - 2] = a >>> 8),
        (i[r - 1] = a));
      for (var _e4 = 0; _e4 < r; _e4 += 64) c(n, o, i, _e4);
      return n;
    }
    function y(e) {
      var t = new Uint8Array(3 * e.length);
      var n = 0;
      for (var _o3 = 0; _o3 < e.length; _o3++) {
        var _s3 = e.charCodeAt(_o3);
        if (_s3 < 128) t[n++] = _s3;
        else {
          if (_s3 >= 55296 && _s3 <= 57343) {
            var _t2 = _o3 + 1 < e.length ? e.charCodeAt(_o3 + 1) : 0;
            _s3 <= 56319 && _t2 >= 56320 && _t2 <= 57343
              ? ((_s3 = 65536 + ((_s3 - 55296) << 10) + (_t2 - 56320)), _o3++)
              : (_s3 = 65533);
          }
          _s3 < 2048
            ? ((t[n++] = 192 | (_s3 >> 6)), (t[n++] = 128 | (63 & _s3)))
            : _s3 < 65536
              ? ((t[n++] = 224 | (_s3 >> 12)),
                (t[n++] = 128 | ((_s3 >> 6) & 63)),
                (t[n++] = 128 | (63 & _s3)))
              : ((t[n++] = 240 | (_s3 >> 18)),
                (t[n++] = 128 | ((_s3 >> 12) & 63)),
                (t[n++] = 128 | ((_s3 >> 6) & 63)),
                (t[n++] = 128 | (63 & _s3)));
        }
      }
      return t.subarray(0, n);
    }
    function p(e) {
      if (null === e || "object" != typeof e) return e;
      if (Array.isArray(e)) return e.map(p);
      var t = e,
        n = {};
      for (var _e5 of Object.keys(t).sort()) n[_e5] = p(t[_e5]);
      return n;
    }
    function h(t) {
      var n = require("Lexical").$exportNodeJSON(t),
        o = n.$;
      if (null !== o && "object" == typeof o && "blockId" in o) {
        var _e6 = o.blockId,
          _t3 = babelHelpers.objectWithoutPropertiesLoose(o, _excluded);
        Object.keys(_t3).length > 0 ? (n.$ = _t3) : delete n.$;
      }
      require("Lexical").$isElementNode(t) &&
        (n.children = t.getChildren().map(h));
      var s = require("Lexical").$getSlotNames(t);
      if (s.length > 0) {
        var _o4 = {};
        for (var _n3 of s) {
          var _s4 = require("Lexical").$getSlot(t, _n3);
          null !== _s4 && (_o4[_n3] = h(_s4));
        }
        n.$slots = _o4;
      }
      return n;
    }
    function $(e) {
      var t = g(e);
      var n = "";
      for (var _e7 = 0; n.length < 21; _e7 += 6) {
        var _o5 = _e7 >>> 5,
          _s5 = 31 & _e7,
          _r =
            _s5 <= 26
              ? t[_o5] >>> (26 - _s5)
              : (t[_o5] << (_s5 - 26)) | (t[_o5 + 1] >>> (58 - _s5));
        n += i[63 & _r];
      }
      return n;
    }
    function S(e, t) {
      return $(
        (function (e, t) {
          var n = e.length + t.length,
            o =
              n <= 64
                ? (a || (a = new Uint8Array(64))).subarray(0, n)
                : new Uint8Array(n);
          return (o.set(e), o.set(t, e.length), o);
        })(e, y(t)),
      );
    }
    function v(e, t) {
      return $(y("dup\u0000" + e + "\u0000" + t));
    }
    var K = "block-id-repair",
      N = /^[A-Za-z0-9_-]{1,64}$/;
    function m(e) {
      return "string" == typeof e && N.test(e) ? e : void 0;
    }
    var I = require("Lexical").createState("blockId", {
      parse: m,
      resetOnCopyNode: !0,
    });
    function x(t) {
      var _m;
      return (_m = m(require("Lexical").$getState(t, I))) != null ? _m : null;
    }
    function k(t) {
      if (
        !require("Lexical").$isElementNode(t) &&
        !require("Lexical").$isDecoratorNode(t)
      )
        return !1;
      var n = t.getParent();
      return (
        !!require("Lexical").$isRootNode(n) ||
        (!(
          (null === n && null === require("Lexical").$getSlotHost(t)) ||
          t.isInline()
        ) &&
          (!require("Lexical").$isElementNode(t) ||
            (!t.isShadowRoot() &&
              (function (t) {
                var _e$getDeclaredNodeStr =
                    require("Lexical").getDeclaredNodeStructure(t.constructor),
                  n = _e$getDeclaredNodeStr.children;
                return (
                  "inline" === n || (Array.isArray(n) && n.includes("inline"))
                );
              })(t))))
      );
    }
    function w() {
      var e = "undefined" == typeof crypto ? void 0 : crypto;
      (void 0 !== e && "function" == typeof e.getRandomValues) ||
        s(
          "generateBlockId: crypto.getRandomValues is not available; configure BlockIdExtension with a generateId of your own",
        );
      var t = new Uint8Array(21);
      e.getRandomValues(t);
      var n = "";
      for (var _e8 = 0; _e8 < t.length; _e8++) n += i[63 & t[_e8]];
      return n;
    }
    var _E = (function () {
      function E() {
        this.keysOfId = (function () {
          return new Map();
        })();
        this.idOfKey = (function () {
          return new Map();
        })();
      }
      var _proto = E.prototype;
      _proto.clear = function clear() {
        (this.keysOfId.clear(), this.idOfKey.clear());
      };
      _proto.holders = function holders(e) {
        var t = this.keysOfId.get(e);
        return void 0 === t ? [] : "string" == typeof t ? [t] : t;
      };
      _proto.isRepeated = function isRepeated(e) {
        return "object" == typeof this.keysOfId.get(e);
      };
      _proto.set = function set(e, t) {
        if (this.idOfKey.get(e) !== t) {
          (this.remove(e), this.idOfKey.set(e, t));
          var _n4 = this.keysOfId.get(t);
          void 0 === _n4
            ? this.keysOfId.set(t, e)
            : "string" == typeof _n4
              ? this.keysOfId.set(t, new Set([_n4, e]))
              : _n4.add(e);
        }
      };
      _proto.remove = function remove(e) {
        var t = this.idOfKey.get(e);
        if (void 0 !== t) {
          this.idOfKey["delete"](e);
          var _n5 = this.keysOfId.get(t);
          "string" == typeof _n5
            ? this.keysOfId["delete"](t)
            : (_n5["delete"](e),
              1 === _n5.size &&
                this.keysOfId.set(t, _n5.values().next().value));
        }
      };
      return E;
    })();
    var _ = new Map();
    function B(t, n) {
      var o = [],
        s = function s(t, n) {
          if (require("Lexical").$isElementNode(t))
            for (
              var _s6 = t.getLastChild();
              null !== _s6;
              _s6 = _s6.getPreviousSibling()
            )
              require("Lexical").$isTextNode(_s6) || o.push([_s6, n]);
          if (require("Lexical").$isSlotHost(t)) {
            var _s7 = require("Lexical").$getSlotNames(t);
            for (var _i2 = _s7.length - 1; _i2 >= 0; _i2--) {
              var _r2 = require("Lexical").$getSlot(t, _s7[_i2]);
              null !== _r2 && o.push([_r2, n]);
            }
          }
        };
      for (s(require("Lexical").$getRoot(), t); o.length > 0; ) {
        var _o$pop = o.pop(),
          _e9 = _o$pop[0],
          _t4 = _o$pop[1];
        s(_e9, n(_e9, _t4));
      }
    }
    function O(t, n) {
      var o = t.config.$isIdentifiedBlock,
        s = new Set(),
        i = [],
        _r3 = function r(e) {
          return null === e.parent || null === e.parent.parent
            ? String(e.index)
            : _r3(e.parent) + "." + e.index;
        };
      B({ index: 0, next: 0, parent: null }, function (e, t) {
        if (!o(e)) return t;
        var r = { index: t.next++, next: 0, parent: t },
          l = x(e);
        return (null !== l ? s.add(l) : n(e) && i.push([e.getKey(), r]), r);
      });
      var l = new Map();
      if (0 === i.length) return l;
      var c = (function () {
        var t = g(
            y(
              require("Lexical").$withCompactExport(!0, function () {
                return (
                  (t = h(require("Lexical").$getRoot())),
                  JSON.stringify(p(t))
                );
                var t;
              }),
            ),
          ),
          n = new Uint8Array(32);
        for (var _e0 = 0; _e0 < 32; _e0++)
          n[_e0] = t[_e0 >>> 2] >>> (24 - 8 * (3 & _e0));
        return n;
      })();
      for (var _ref2 of i) {
        var _e1 = _ref2[0];
        var _t5 = _ref2[1];
        {
          var _n6 = _r3(_t5);
          var _o6 = S(c, _n6);
          for (var _e10 = 1; s.has(_o6); _e10++) _o6 = S(c, _n6 + "#" + _e10);
          (s.add(_o6), l.set(_e1, _o6));
        }
      }
      return l;
    }
    function A(e, t, n, o) {
      var s = new Map();
      n.sort(L);
      for (var _i3 = 1; _i3 < n.length; _i3++) {
        var _r4 = v(t, String(_i3));
        for (var _n7 = 1; C(e, _r4, o); _n7++) _r4 = v(t, _i3 + "#" + _n7);
        (o.add(_r4), s.set(n[_i3].getKey(), _r4));
      }
      return s;
    }
    function b(t) {
      var _m2;
      return void 0 === t
        ? null
        : (_m2 = m(
              require("Lexical").$getState(
                t,
                I,
                require("Lexical").NODE_STATE_DIRECT,
              ),
            )) != null
          ? _m2
          : null;
    }
    function R(e, t) {
      return null !== t && t.isAttached() && e.config.$isIdentifiedBlock(t);
    }
    function M(t, n, o) {
      if (o === void 0) {
        o = [];
      }
      var s = new Set(),
        i = [],
        r = function r(o) {
          if (s.has(o)) return;
          s.add(o);
          var r = require("Lexical").$getNodeByKey(o);
          R(t, r) && x(r) === n && i.push(r);
        };
      for (var _e11 of t.index.holders(n)) r(_e11);
      for (var _e12 of o) r(_e12);
      return i;
    }
    function C(e, t, n, o) {
      if (o === void 0) {
        o = null;
      }
      return (
        n.has(t) ||
        M(e, t).some(function (e) {
          return e.getKey() !== o;
        })
      );
    }
    function T(t) {
      var n = t.getParent();
      return null !== n ? n : require("Lexical").$getSlotHost(t);
    }
    function L(t, n) {
      if (t.is(n)) return 0;
      var o = new Map();
      for (var _e13 = t, _n8 = T(t); null !== _n8; _e13 = _n8, _n8 = T(_n8))
        o.set(_n8.getKey(), _e13);
      if (o.has(n.getKey())) return 1;
      for (var _s8 = n, _i4 = T(n); null !== _i4; _s8 = _i4, _i4 = T(_i4)) {
        if (_i4.is(t)) return -1;
        var _n9 = o.get(_i4.getKey());
        if (void 0 === _n9) continue;
        var _r5 = require("Lexical").$getSlotNameWithinHost(_n9),
          _l = require("Lexical").$getSlotNameWithinHost(_s8);
        if (null !== _r5 || null !== _l) {
          if (null === _r5 || null === _l) return null === _r5 ? 1 : -1;
          var _t6 = require("Lexical").$getSlotNames(_i4);
          return _t6.indexOf(_r5) - _t6.indexOf(_l);
        }
        var _c = _n9.getKey(),
          _d = _s8.getKey();
        var _u = _n9,
          _a = _s8;
        for (
          ;
          null !== _u && null !== _a;
          _u = _u.getNextSibling(), _a = _a.getNextSibling()
        ) {
          if (_u.getKey() === _d) return -1;
          if (_a.getKey() === _c) return 1;
        }
        return null === _u ? 1 : -1;
      }
      return H(t, n);
    }
    function H(e, t) {
      return Number(e.getKey()) - Number(t.getKey());
    }
    function z(e, t) {
      for (var _n0 = 0; _n0 < 32; _n0++) {
        var _n1 = e.config.generateId();
        if ("string" == typeof _n1 && m(_n1) === _n1 && !C(e, _n1, t))
          return (t.add(_n1), _n1);
      }
      s(
        "BlockIdExtension: generateId returned " +
          String(32) +
          " ids in a row that were invalid or already in use",
      );
    }
    function U(t, n) {
      var o = t.getEditorState()._nodeMap.get("root"),
        s = require("Lexical").$isElementNode(o) ? o.__first : null;
      return (
        !n.hasContent ||
        (null !== s && null === require("Lexical").$getNodeByKey(s))
      );
    }
    var D = {
      build: function build(e, t, o) {
        var s = o.getInitResult(),
          i = require("LexicalExtensionNamedSignals").namedSignals({
            disabled: t.disabled,
          });
        return {
          $getBlockById: s.$getBlockById,
          $isIdentifiedBlock: t.$isIdentifiedBlock,
          disabled: i.disabled,
        };
      },
      config: { $isIdentifiedBlock: k, disabled: !1, generateId: w },
      init: function init(e, t) {
        return (function (e) {
          var t = {
            $getBlockById: function $getBlockById(n) {
              var o = null;
              if (!t.active)
                return (
                  B(null, function (t) {
                    return (
                      null === o &&
                        e.$isIdentifiedBlock(t) &&
                        x(t) === n &&
                        (o = t),
                      null
                    );
                  }),
                  o
                );
              for (var _e14 of M(t, n))
                (null === o || L(_e14, o) < 0) && (o = _e14);
              return o;
            },
            active: !1,
            config: e,
            hasContent: !1,
            index: new _E(),
            placed: _,
            placedState: null,
            provisional: new Map(),
            provisionalSeen: new Set(),
            provisionalState: null,
          };
          return t;
        })(t);
      },
      name: "@lexical/extension/BlockId",
      peerDependencies: [["@lexical/NodeStructure"]],
      register: function register(t, n, s) {
        var i = s.getOutput(),
          r = s.getInitResult();
        return require("LexicalExtensionSignals").effect(function () {
          if (!i.disabled.value)
            return (function (t, n) {
              var o = new Set(),
                s = n.config.$isIdentifiedBlock,
                i = function i(e) {
                  s(e) && o.add(e.getKey());
                },
                r = function r(n) {
                  t.update(
                    function () {
                      for (var _t7 of n) {
                        var _n10 = require("Lexical").$getNodeByKey(_t7);
                        null !== _n10 && _n10.isAttached() && _n10.markDirty();
                      }
                    },
                    {
                      discrete: !0,
                      tag: [require("Lexical").HISTORY_MERGE_TAG, K],
                    },
                  );
                },
                l = function l(t, o) {
                  var s = (function (t, n, o) {
                    var s = t.index,
                      i = t.config,
                      r = [],
                      l = new Set(),
                      c = function c(e) {
                        var t = e.getKey();
                        if (e.isAttached() && i.$isIdentifiedBlock(e)) {
                          var _n11 = x(e);
                          null === _n11
                            ? (s.remove(t), r.push(t))
                            : (s.set(t, _n11), l.add(_n11));
                        } else s.remove(t);
                      };
                    if (
                      null === o ||
                      (0 === o.dirtyLeaves.size &&
                        1 === o.dirtyElements.size &&
                        o.dirtyElements.has("root"))
                    )
                      (s.clear(),
                        B(null, function (e) {
                          return (c(e), null);
                        }));
                    else {
                      var _t8 = n._nodeMap,
                        _i5 = o.prevEditorState._nodeMap,
                        _r6 = function _r6(n) {
                          var o = [n];
                          for (; o.length > 0; ) {
                            var _n12 = o.pop();
                            if (_t8.has(_n12)) continue;
                            s.remove(_n12);
                            var _r7 = _i5.get(_n12);
                            if (require("Lexical").$isElementNode(_r7)) {
                              var _e15 = _r7.__first;
                              for (; null !== _e15; ) {
                                o.push(_e15);
                                var _t9 = _i5.get(_e15);
                                _e15 = void 0 === _t9 ? null : _t9.__next;
                              }
                            }
                            if (
                              void 0 !== _r7 &&
                              require("Lexical").$isSlotHost(_r7) &&
                              null !== _r7.__slots
                            )
                              for (var _e16 of _r7.__slots.values())
                                o.push(_e16);
                          }
                        },
                        _l2 = function _l2(n) {
                          var o = _t8.get(n);
                          void 0 === o
                            ? _r6(n)
                            : require("Lexical").$isTextNode(o) || c(o);
                        };
                      for (var _ref4 of o.dirtyElements) {
                        var _e17 = _ref4[0];
                        var _n13 = _ref4[1];
                        (_n13 || _t8.get(_e17) !== _i5.get(_e17)) && _l2(_e17);
                      }
                      for (var _e18 of o.dirtyLeaves) _l2(_e18);
                    }
                    for (var _e19 of l)
                      if (s.isRepeated(_e19)) {
                        var _n14 = M(t, _e19);
                        if (_n14.length > 1)
                          for (var _e20 of _n14) r.push(_e20.getKey());
                      }
                    return r;
                  })(n, t, o);
                  return (
                    n.hasContent ||
                      require("Lexical").$getRoot().isEmpty() ||
                      (n.hasContent = !0),
                    (n.placed =
                      s.length > 0
                        ? (function (t, n) {
                            var o = new Set(),
                              s = new Set();
                            for (var _i6 of n) {
                              var _n15 = require("Lexical").$getNodeByKey(_i6);
                              if (R(t, _n15)) {
                                var _e21 = x(_n15);
                                null === _e21 ? o.add(_i6) : s.add(_e21);
                              }
                            }
                            var i =
                                o.size > 0
                                  ? O(t, function (e) {
                                      return o.has(e.getKey());
                                    })
                                  : new Map(),
                              r = new Set(i.values());
                            for (var _e22 of Array.from(s).sort()) {
                              var _n16 = M(t, _e22);
                              if (_n16.length > 1)
                                for (var _ref6 of A(t, _e22, _n16, r)) {
                                  var _o7 = _ref6[0];
                                  var _s9 = _ref6[1];
                                  i.set(_o7, _s9);
                                }
                            }
                            return i;
                          })(n, s)
                        : _),
                    (n.placedState = t),
                    s
                  );
                };
              (n.index.clear(), (n.active = !0), (n.hasContent = !1));
              var c = t.getEditorState(),
                d = c.read(
                  function () {
                    return l(c, null);
                  },
                  { editor: t },
                ),
                u = [
                  t.registerUpdateListener(function (_ref7) {
                    var e = _ref7.editorState,
                      n = _ref7.prevEditorState,
                      o = _ref7.dirtyElements,
                      s = _ref7.dirtyLeaves,
                      i = _ref7.tags;
                    var c = e.read(
                      function () {
                        return l(e, {
                          dirtyElements: o,
                          dirtyLeaves: s,
                          prevEditorState: n,
                        });
                      },
                      { editor: t },
                    );
                    c.length > 0 && (i.has(K) || r(c));
                  }),
                ];
              for (var _ref9 of t._nodes.values()) {
                var _n17 = _ref9.klass;
                _n17 === require("Lexical").RootNode ||
                  _n17 === require("Lexical").TextNode ||
                  _n17 === require("Lexical").LineBreakNode ||
                  _n17.prototype instanceof require("Lexical").TextNode ||
                  u.push(t.registerNodeTransform(_n17, i));
              }
              return (
                u.push(
                  t.registerNodeTransform(
                    require("Lexical").RootNode,
                    function () {
                      (t._dirtyElements.has("root") && o.size > 0 && U(t, n)) ||
                        (function (t, n, o) {
                          if (0 === o.size) return;
                          var s = Array.from(o);
                          if (
                            (o.clear(),
                            require("Lexical").$hasUpdateTag(
                              require("Lexical").COLLABORATION_TAG,
                            ) ||
                              require("Lexical").$hasUpdateTag(
                                require("Lexical").HISTORIC_TAG,
                              ))
                          )
                            return;
                          var i = [];
                          for (var _t0 of s) {
                            var _o8 = require("Lexical").$getNodeByKey(_t0);
                            R(n, _o8) && i.push(_o8);
                          }
                          if (0 === i.length) return;
                          var r = new Set(
                              i.map(function (e) {
                                return e.getKey();
                              }),
                            ),
                            l = t._pendingEditorState;
                          n.provisionalState !== l &&
                            (n.provisional.clear(),
                            n.provisionalSeen.clear(),
                            (n.provisionalState = l));
                          var c = n.provisional,
                            d = n.provisionalSeen;
                          for (var _e23 of r) d.add(_e23);
                          var u = function u(e) {
                            var t = c.get(e.getKey());
                            return (
                              void 0 !== t &&
                              null === t.yielded &&
                              t.id === x(e)
                            );
                          };
                          for (var _t1 of i) {
                            var _o9 = c.get(_t1.getKey());
                            void 0 !== _o9 &&
                              null !== _o9.yielded &&
                              _o9.id === x(_t1) &&
                              0 === M(n, _o9.yielded, d).length &&
                              (c["delete"](_t1.getKey()),
                              require("Lexical").$setState(
                                _t1,
                                I,
                                _o9.yielded,
                              ));
                          }
                          var a = t.getEditorState(),
                            f = a._nodeMap,
                            g = n.index,
                            y = new Set(),
                            p = n.placedState === a ? n.placed : _,
                            h = function h(e) {
                              var t = p.get(e);
                              return void 0 !== t ? t : b(f.get(e));
                            },
                            $ = function $(e, t) {
                              return p.get(e) === t || g.idOfKey.get(e) === t;
                            },
                            S = new Map(),
                            v = function v(t) {
                              if (null === t) return !1;
                              var n = require("Lexical").$getNodeByKey(t);
                              return null !== n && !n.isAttached();
                            },
                            K = U(t, n),
                            N = function N(t, n, o) {
                              (S.set(t.getKey(), o),
                                c["delete"](t.getKey()),
                                y.add(n),
                                x(t) !== n &&
                                  require("Lexical").$setState(t, I, n));
                            };
                          if (p.size > 0)
                            for (var _e24 of i) {
                              var _t10 = _e24.getKey(),
                                _o0 = p.get(_t10),
                                _s0 = x(_e24);
                              void 0 === _o0 ||
                                (null !== _s0 && _s0 !== b(f.get(_t10))) ||
                                C(n, _o0, y, _t10) ||
                                N(_e24, _o0, _t10);
                            }
                          var m = function m(e, t) {
                              var o = c.get(e.getKey());
                              return (
                                (void 0 !== o && o.id === t) ||
                                M(n, t).some(function (n) {
                                  return !n.is(e) && $(n.getKey(), t);
                                })
                              );
                            },
                            k = i.filter(function (e) {
                              return !f.has(e.getKey());
                            });
                          for (var _t11 of k) {
                            if (!require("Lexical").$isElementNode(_t11))
                              continue;
                            var _o1 = _t11.getFirstChild();
                            var _s1 = null;
                            for (
                              var _e25 = _o1;
                              null !== _e25 && null === _s1;
                              _e25 = _e25.getNextSibling()
                            ) {
                              var _t12 = f.get(_e25.getKey());
                              void 0 !== _t12 &&
                                null !== _t12.__parent &&
                                (_e25 === _o1 || v(_t12.__parent)) &&
                                (_s1 = _t12.__parent);
                            }
                            if (null === _s1) continue;
                            var _i7 = x(_t11),
                              _r8 = h(_s1);
                            if (
                              null === _r8 ||
                              (null !== _i7 && _i7 !== _r8 && !m(_t11, _i7))
                            )
                              continue;
                            if (v(_s1)) {
                              C(n, _r8, y, _s1) || N(_t11, _r8, _s1);
                              continue;
                            }
                            var _l3 = require("Lexical").$getNodeByKey(_s1),
                              _c2 = f.get(_s1);
                            null !== _o1 &&
                              require("Lexical").$isElementNode(_l3) &&
                              _l3.isAttached() &&
                              0 === _l3.getChildrenSize() &&
                              require("Lexical").$isElementNode(_c2) &&
                              _c2.__first === _o1.getKey() &&
                              x(_l3) === _r8 &&
                              !y.has(_r8) &&
                              (require("Lexical").$setState(_l3, I, z(n, y)),
                              N(_t11, _r8, _s1));
                          }
                          var w = new Set(),
                            E = function E(t) {
                              var o = [t];
                              for (; o.length > 0; ) {
                                var _t13 = o[o.length - 1],
                                  _s10 = _t13.getKey();
                                if (w.has(_s10)) {
                                  o.pop();
                                  continue;
                                }
                                var _i8 = _t13.getPreviousSibling();
                                if (
                                  null !== _i8 &&
                                  !f.has(_i8.getKey()) &&
                                  r.has(_i8.getKey()) &&
                                  !w.has(_i8.getKey())
                                ) {
                                  o.push(_i8);
                                  continue;
                                }
                                if (
                                  (o.pop(),
                                  w.add(_s10),
                                  S.has(_s10) || (null !== x(_t13) && !u(_t13)))
                                )
                                  continue;
                                var _l4 = null;
                                var _c3 = require("Lexical").$getSlotHost(_t13);
                                if (null !== _c3) {
                                  var _n18$__slots$get;
                                  var _n18 = f.get(_c3.getKey()),
                                    _o10 =
                                      require("Lexical").$getSlotNameWithinHost(
                                        _t13,
                                      );
                                  _l4 =
                                    void 0 !== _n18 &&
                                    require("Lexical").$isSlotHost(_n18) &&
                                    null !== _n18.__slots &&
                                    null !== _o10
                                      ? (_n18$__slots$get =
                                          _n18.__slots.get(_o10)) != null
                                        ? _n18$__slots$get
                                        : null
                                      : null;
                                } else if (null === _i8) {
                                  var _n19 = _t13.getParent(),
                                    _o11 = _n19 && f.get(_n19.getKey());
                                  _l4 = require("Lexical").$isElementNode(_o11)
                                    ? _o11.__first
                                    : null;
                                } else {
                                  var _e26 = f.has(_i8.getKey())
                                      ? _i8.getKey()
                                      : S.get(_i8.getKey()),
                                    _t14 =
                                      void 0 === _e26 ? void 0 : f.get(_e26);
                                  _l4 = void 0 === _t14 ? null : _t14.__next;
                                }
                                if (v(_l4)) {
                                  var _e27 = h(_l4);
                                  null === _e27 ||
                                    C(n, _e27, y, _l4) ||
                                    N(_t13, _e27, _l4);
                                }
                              }
                            };
                          for (var _e28 of k) E(_e28);
                          var B = new Map(),
                            T = [];
                          for (var _e29 of i) {
                            var _t15 = x(_e29);
                            if (null === _t15) T.push(_e29);
                            else {
                              var _n20 = B.get(_t15);
                              void 0 === _n20
                                ? B.set(_t15, [_e29.getKey()])
                                : _n20.push(_e29.getKey());
                            }
                          }
                          var L = new Map(),
                            D = new Map();
                          for (var _ref1 of B) {
                            var _e30 = _ref1[0];
                            var _t16 = _ref1[1];
                            {
                              var _o12 = M(n, _e30, _t16);
                              _o12.length > 1 && L.set(_e30, _o12);
                            }
                          }
                          var _loop = function _loop(_t17) {
                            var o = L.get(_t17);
                            y.add(_t17);
                            var s = o.filter(function (e) {
                                return $(e.getKey(), _t17);
                              }),
                              i = s.length > 1 ? s : K ? o : null;
                            var r;
                            if (null !== i) {
                              for (var _ref11 of A(n, _t17, i, y)) {
                                var _o15 = _ref11[0];
                                var _s12 = _ref11[1];
                                require("Lexical").$setState(
                                  require("Lexical").$getNodeByKey(_o15),
                                  I,
                                  _s12,
                                );
                              }
                              r = i;
                            } else if (1 === s.length) r = s;
                            else {
                              var _e31 = o.filter(function (e) {
                                var n = S.get(e.getKey());
                                return void 0 !== n && v(n) && h(n) === _t17;
                              });
                              r = [
                                (_e31.length > 0 ? _e31 : o).reduce(
                                  function (e, t) {
                                    return H(t, e) < 0 ? t : e;
                                  },
                                ),
                              ];
                            }
                            for (var _e32 of o)
                              r.includes(_e32) ||
                                (T.push(_e32), D.set(_e32.getKey(), _t17));
                          };
                          for (var _t17 of Array.from(L.keys()).sort()) {
                            _loop(_t17);
                          }
                          var P = T;
                          if (K && T.length > 0) {
                            var _t18 = new Set(
                                T.map(function (e) {
                                  return e.getKey();
                                }),
                              ),
                              _o13 = O(n, function (e) {
                                return _t18.has(e.getKey());
                              });
                            P = [];
                            for (var _t19 of T) {
                              var _s11 = _t19.getKey(),
                                _i9 = _o13.get(_s11);
                              void 0 === _i9 || C(n, _i9, y, _s11)
                                ? P.push(_t19)
                                : (y.add(_i9),
                                  require("Lexical").$setState(_t19, I, _i9));
                            }
                          }
                          for (var _t20 of P.sort(H)) {
                            var _D$get;
                            var _o14 = z(n, y);
                            (require("Lexical").$setState(_t20, I, _o14),
                              f.has(_t20.getKey()) ||
                                c.set(_t20.getKey(), {
                                  id: _o14,
                                  yielded:
                                    (_D$get = D.get(_t20.getKey())) != null
                                      ? _D$get
                                      : null,
                                }));
                          }
                        })(t, n, o);
                    },
                  ),
                ),
                d.length > 0 && r(d),
                function () {
                  for (var _e33 of u.reverse()) _e33();
                  ((n.active = !1),
                    n.index.clear(),
                    (n.placed = _),
                    (n.placedState = null),
                    n.provisional.clear(),
                    n.provisionalSeen.clear(),
                    (n.provisionalState = null),
                    o.clear());
                }
              );
            })(t, r);
        });
      },
    };
    ((exports.$defaultIsIdentifiedBlock = k),
      (exports.$getBlockById = function (e) {
        return require("LexicalExtensionGetExtensionDependency")
          .$getExtensionOutput(D)
          .$getBlockById(e);
      }),
      (exports.$getBlockId = x),
      (exports.$isRootChildBlock = function (t) {
        return (
          (require("Lexical").$isElementNode(t) ||
            require("Lexical").$isDecoratorNode(t)) &&
          require("Lexical").$isRootNode(t.getParent())
        );
      }),
      (exports.BlockIdExtension = D),
      (exports.blockIdState = I),
      (exports.generateBlockId = w));
  },
  null,
);
