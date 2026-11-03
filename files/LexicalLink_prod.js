__d(
  "LexicalLink.prod",
  [
    "Lexical",
    "LexicalA11y",
    "LexicalExtensionNamedSignals",
    "LexicalExtensionSignals",
    "LexicalHtml",
    "LexicalUtils",
  ],
  function $module_LexicalLink_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _excluded = ["url"],
      _excluded2 = ["url"];
    var _require_Lexical;
    var l = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function s(e, t) {
      if ("number" == typeof e) return Number.isFinite(e) ? e : t;
      if ("string" != typeof e || !l.test(e)) return t;
      var n = Number(e);
      return Number.isFinite(n) ? n : t;
    }
    function a(e, t, n, r, i) {
      var o = s(e, t);
      return o >= n && o <= r && Number.isInteger(o) ? o : t;
    }
    function c(e, t) {
      ((e.__rel = t.__rel),
        (e.__target = t.__target),
        (e.__title = t.__title),
        (e.__url = t.__url));
    }
    var u = function u(e) {
      var t = require("Lexical").getterTableOf(e, "format"),
        n = require("Lexical").setterTableOf(e, "format"),
        i = require("Lexical").setterDefaultOf(e, "format");
      return {
        exportJSON: function exportJSON(e) {
          var n = e.__textFormat,
            r = e.__textStyle,
            i = (0 !== n || "" !== r) && e.shouldSerializeTextStyles();
          return {
            children: [],
            rel: e.__rel,
            target: e.__target,
            title: e.__title,
            url: e.__url,
            direction: e.__dir,
            format: t[e.__format],
            indent: e.__indent,
            textFormat: 0 !== n && i ? n : void 0,
            textStyle: "" !== r && i ? r : void 0,
            type: e.__type,
            version: 1,
          };
        },
        exportCompactJSON: function exportCompactJSON(e) {
          var n = e.__textFormat,
            r = e.__textStyle,
            i = (0 !== n || "" !== r) && e.shouldSerializeTextStyles(),
            o = { type: e.__type, children: [] },
            l = e.__rel;
          null != l && (o.rel = l);
          var s = e.__target;
          null != s && (o.target = s);
          var a = e.__title;
          null != a && (o.title = a);
          var c = e.__url;
          void 0 !== c && "" !== c && (o.url = c);
          var u = e.__dir;
          null != u && (o.direction = u);
          var g = t[e.__format];
          void 0 !== g && "" !== g && (o.format = g);
          var d = e.__indent;
          return (
            void 0 !== d && 0 !== d && (o.indent = d),
            void 0 !== n && 0 !== n && i && (o.textFormat = n),
            void 0 !== r && "" !== r && i && (o.textStyle = r),
            o
          );
        },
        updateFromJSON: function updateFromJSON(e, t) {
          var r = t.direction;
          e.__dir = null === r || "ltr" === r || "rtl" === r ? r : null;
          var o = t.format;
          ((e.__format = "string" == typeof o && o in n ? n[o] : i),
            (e.__indent = a(t.indent, 0, 0, Infinity)),
            (e.__textFormat = s(t.textFormat, 0)));
          var l = t.textStyle;
          e.__textStyle = "string" == typeof l ? l : "";
          var c = t.rel;
          e.__rel = "string" == typeof c && "" !== c ? c : null;
          var u = t.target;
          e.__target = "string" == typeof u && "" !== u ? u : null;
          var g = t.title;
          e.__title = "string" == typeof g && "" !== g ? g : null;
          var d = t.url;
          return ((e.__url = "string" == typeof d ? d : ""), e);
        },
        afterCloneFrom: c,
      };
    };
    function g(e, t) {
      e.__isUnlinked = t.__isUnlinked;
    }
    var d = function d(e) {
        var t = require("Lexical").getterTableOf(e, "format"),
          n = require("Lexical").setterTableOf(e, "format"),
          i = require("Lexical").setterDefaultOf(e, "format");
        return {
          exportJSON: function exportJSON(e) {
            var n = e.__textFormat,
              r = e.__textStyle,
              i = (0 !== n || "" !== r) && e.shouldSerializeTextStyles();
            return {
              children: [],
              isUnlinked: e.__isUnlinked,
              rel: e.__rel,
              target: e.__target,
              title: e.__title,
              url: e.__url,
              direction: e.__dir,
              format: t[e.__format],
              indent: e.__indent,
              textFormat: 0 !== n && i ? n : void 0,
              textStyle: "" !== r && i ? r : void 0,
              type: e.__type,
              version: 1,
            };
          },
          exportCompactJSON: function exportCompactJSON(e) {
            var n = e.__textFormat,
              r = e.__textStyle,
              i = (0 !== n || "" !== r) && e.shouldSerializeTextStyles(),
              o = { type: e.__type, children: [] },
              l = e.__isUnlinked;
            void 0 !== l && !1 !== l && (o.isUnlinked = l);
            var s = e.__rel;
            null != s && (o.rel = s);
            var a = e.__target;
            null != a && (o.target = a);
            var c = e.__title;
            null != c && (o.title = c);
            var u = e.__url;
            void 0 !== u && "" !== u && (o.url = u);
            var g = e.__dir;
            null != g && (o.direction = g);
            var d = t[e.__format];
            void 0 !== d && "" !== d && (o.format = d);
            var f = e.__indent;
            return (
              void 0 !== f && 0 !== f && (o.indent = f),
              void 0 !== n && 0 !== n && i && (o.textFormat = n),
              void 0 !== r && "" !== r && i && (o.textStyle = r),
              o
            );
          },
          updateFromJSON: function updateFromJSON(e, t) {
            var r = t.direction;
            e.__dir = null === r || "ltr" === r || "rtl" === r ? r : null;
            var o = t.format;
            ((e.__format = "string" == typeof o && o in n ? n[o] : i),
              (e.__indent = a(t.indent, 0, 0, Infinity)),
              (e.__textFormat = s(t.textFormat, 0)));
            var l = t.textStyle;
            e.__textStyle = "string" == typeof l ? l : "";
            var c = t.rel;
            e.__rel = "string" == typeof c && "" !== c ? c : null;
            var u = t.target;
            e.__target = "string" == typeof u && "" !== u ? u : null;
            var g = t.title;
            e.__title = "string" == typeof g && "" !== g ? g : null;
            var d = t.url;
            e.__url = "string" == typeof d ? d : "";
            var f = t.isUnlinked;
            return ((e.__isUnlinked = "boolean" == typeof f && f), e);
          },
          afterCloneFrom: g,
        };
      },
      f = new Set(["http:", "https:", "mailto:", "sms:", "tel:"]),
      _ = (_require_Lexical = require("Lexical")).nodeSchema()({
        rel: _require_Lexical.withField(
          _require_Lexical.nullable(_require_Lexical.stringValue(), {
            defaultAsNull: !0,
          }),
          { field: "__rel" },
        ),
        target: _require_Lexical.withField(
          _require_Lexical.nullable(_require_Lexical.stringValue(), {
            defaultAsNull: !0,
          }),
          { field: "__target" },
        ),
        title: _require_Lexical.withField(
          _require_Lexical.nullable(_require_Lexical.stringValue(), {
            defaultAsNull: !0,
          }),
          { field: "__title" },
        ),
        url: _require_Lexical.withField(_require_Lexical.stringValue(), {
          field: "__url",
          getter: "getURL",
          setter: "setURL",
        }),
      });
    var _p2 = (function (_r$ElementNode) {
      function p(e, t, n) {
        var _this;
        if (e === void 0) {
          e = "";
        }
        if (t === void 0) {
          t = {};
        }
        _this = _r$ElementNode.call(this, n) || this;
        var _t = t,
          _t$target = _t.target,
          r = _t$target === void 0 ? null : _t$target,
          _t$rel = _t.rel,
          i = _t$rel === void 0 ? null : _t$rel,
          _t$title = _t.title,
          o = _t$title === void 0 ? null : _t$title;
        ((_this.__url = e),
          (_this.__target = r),
          (_this.__rel = i),
          (_this.__title = o));
        return _this;
      }
      babelHelpers.inheritsLoose(p, _r$ElementNode);
      var _proto = p.prototype;
      _proto.$config = function $config() {
        return this.config("link", {
          children: "inline",
          extends: require("Lexical").ElementNode,
          generated: u,
          importDOM: {
            a: function a() {
              return { conversion: k, priority: 1 };
            },
          },
          inline: !0,
          json: _,
          mergeAdjacent: { by: ["url", "target", "rel", "title"] },
        });
      };
      _proto.createDOM = function createDOM(e) {
        var t = require("Lexical").$getDocument().createElement("a");
        return (
          this.updateLinkDOM(null, t, e),
          require("Lexical").addClassNamesToElement(t, e.theme.link),
          t
        );
      };
      _proto.updateLinkDOM = function updateLinkDOM(e, t, n) {
        if (require("Lexical").isHTMLAnchorElement(t)) {
          (e && e.__url === this.__url) ||
            (t.href = this.sanitizeUrl(this.__url));
          for (var _n of ["target", "rel", "title"]) {
            var _r = "__" + _n,
              _i = this[_r];
            (e && e[_r] === _i) || (_i ? (t[_n] = _i) : t.removeAttribute(_n));
          }
        }
      };
      _proto.updateDOM = function updateDOM(e, t, n) {
        return (this.updateLinkDOM(e, t, n), !1);
      };
      _proto.sanitizeUrl = function sanitizeUrl(e) {
        var t = e;
        e = E(e);
        try {
          var _t2 = new URL(E(e));
          if (!f.has(_t2.protocol)) return "about:blank";
        } catch (_unused) {
          var _e = t
            .replace(/[\u0000-\u001F\u007F\s]/g, "")
            .match(/^([a-z][a-z0-9+.-]*):/i);
          if (null != _e && !f.has(_e[1].toLowerCase() + ":"))
            return "about:blank";
        }
        return e;
      };
      _proto.getURL = function getURL() {
        return this.getLatest().__url;
      };
      _proto.setURL = function setURL(e) {
        var t = this.getWritable();
        return ((t.__url = e), t);
      };
      _proto.getTarget = function getTarget() {
        return this.getLatest().__target;
      };
      _proto.setTarget = function setTarget(e) {
        var t = this.getWritable();
        return ((t.__target = e), t);
      };
      _proto.getRel = function getRel() {
        return this.getLatest().__rel;
      };
      _proto.setRel = function setRel(e) {
        var t = this.getWritable();
        return ((t.__rel = e), t);
      };
      _proto.getTitle = function getTitle() {
        return this.getLatest().__title;
      };
      _proto.setTitle = function setTitle(e) {
        var t = this.getWritable();
        return ((t.__title = e), t);
      };
      _proto.insertNewAfter = function insertNewAfter(e, t) {
        if (t === void 0) {
          t = !0;
        }
        var n = require("Lexical").$copyNode(this);
        return (this.insertAfter(n, t), n);
      };
      _proto.canInsertTextBefore = function canInsertTextBefore() {
        return !1;
      };
      _proto.canInsertTextAfter = function canInsertTextAfter() {
        return !1;
      };
      _proto.canBeEmpty = function canBeEmpty() {
        return !1;
      };
      _proto.isInline = function isInline() {
        return !0;
      };
      _proto.extractWithChild = function extractWithChild(e, t, n) {
        if (!require("Lexical").$isRangeSelection(t)) return !1;
        var i = t.anchor.getNode(),
          o = t.focus.getNode();
        return (
          (this.is(i) || this.isParentOf(i)) &&
          (this.is(o) || this.isParentOf(o)) &&
          t.getTextContent().length > 0
        );
      };
      _proto.isEmailURI = function isEmailURI() {
        return this.getURL().startsWith("mailto:");
      };
      _proto.isWebSiteURI = function isWebSiteURI() {
        var e = this.getURL();
        return e.startsWith("https://") || e.startsWith("http://");
      };
      _proto.shouldMergeAdjacentLink = function shouldMergeAdjacentLink(e) {
        return (
          this.getType() === e.getType() &&
          this.getURL() === e.getURL() &&
          this.getTarget() === e.getTarget() &&
          this.getRel() === e.getRel() &&
          this.getTitle() === e.getTitle()
        );
      };
      return p;
    })(_require_Lexical.ElementNode);
    function h(e) {
      var t = require("Lexical").$caretFromPoint(e, "next");
      return [t, t.getFlipped()];
    }
    function m(e, t) {
      for (var _n2 of t)
        if (_n2.origin.isAttached()) {
          var _t3 = require("Lexical").$normalizeCaret(_n2);
          return void require("Lexical").$setPointFromCaret(e, _t3);
        }
    }
    function x(e, t) {
      var n = e.constructor;
      return (
        t.constructor === n &&
        require("Lexical").INTERNAL_isNodeStructureEnforced(
          require("Lexical").$getEditor(),
        ) &&
        require("Lexical").getDeclaredNodeStructure(n).declaredBy
          .mergeAdjacent === n
      );
    }
    function N(e) {
      var t = require("Lexical").$getSelection();
      var n = null,
        i = null;
      function o() {
        require("Lexical").$isRangeSelection(t) &&
          (m(t.anchor, n),
          m(t.focus, i),
          require("Lexical").$normalizeSelection__EXPERIMENTAL(t));
      }
      require("Lexical").$isRangeSelection(t) &&
        ((n = h(t.anchor)), (i = h(t.focus)));
      var l = !1;
      var s = !require("Lexical").INTERNAL_isNodeStructureEnforced(
        require("Lexical").$getEditor(),
      );
      for (var _t4 of s ? require("Lexical").$getChildCaret(e, "next") : []) {
        var _n3 = _t4.origin;
        if (require("Lexical").$isElementNode(_n3) && !_n3.isInline()) {
          var _i2 = _n3.getChildren();
          if (_i2.length > 0) {
            var _t5 = require("Lexical").$copyNode(e);
            (_t5.append.apply(_t5, Array.from(_i2)), _n3.append(_t5), (l = !0));
          }
          require("Lexical").$insertNodeToNearestRootAtCaret(
            _n3,
            require("Lexical").$rewindSiblingCaret(_t4),
            {
              $shouldSplit: function $shouldSplit() {
                return !1;
              },
            },
          );
        }
      }
      function a(e, t, n) {
        var i = e[0],
          o = e[1],
          l = function l(e) {
            return require("Lexical").$isSiblingCaret(e) && e.origin.is(t);
          };
        if (!l(i) && !l(o)) return e;
        var s = require("Lexical").$normalizeCaret(
          require("Lexical").$getChildCaret(n, "next"),
        );
        return [s, s.getFlipped()];
      }
      if (e.isAttached()) {
        var _t6 = e.getPreviousSibling();
        if (L(_t6) && !x(_t6, e) && _t6.shouldMergeAdjacentLink(e))
          return (
            n && (n = a(n, _t6, e)),
            i && (i = a(i, _t6, e)),
            _t6.append.apply(_t6, Array.from(e.getChildren())),
            e.remove(),
            void o()
          );
        var _r2 = e.getNextSibling();
        L(_r2) &&
          !x(e, _r2) &&
          e.shouldMergeAdjacentLink(_r2) &&
          (n && (n = a(n, e, _r2)),
          i && (i = a(i, e, _r2)),
          e.append.apply(e, Array.from(_r2.getChildren())),
          _r2.remove(),
          (l = !0));
      }
      if (l) {
        if (!e.canBeEmpty() && e.isEmpty()) {
          var _t7 = e.getParent();
          (e.remove(), _t7 && _t7.isEmpty() && _t7.remove());
        }
        o();
      }
    }
    function k(e) {
      var t = null;
      if (require("Lexical").isHTMLAnchorElement(e)) {
        var _n4 = e.textContent;
        ((null !== _n4 && "" !== _n4) || e.children.length > 0) &&
          (t = S(e.getAttribute("href") || "", {
            rel: e.getAttribute("rel"),
            target: e.getAttribute("target"),
            title: e.getAttribute("title"),
          }));
      }
      return { node: t };
    }
    function S(e, t) {
      if (e === void 0) {
        e = "";
      }
      return require("Lexical").$applyNodeReplacement(new _p2(e, t));
    }
    function L(e) {
      return e instanceof _p2;
    }
    var $ = _require_Lexical.nodeSchema()({
      isUnlinked: _require_Lexical.withField(_require_Lexical.booleanValue(), {
        field: "__isUnlinked",
      }),
    });
    var _b = (function (_p) {
      function b(e, t, n) {
        var _this2;
        if (e === void 0) {
          e = "";
        }
        if (t === void 0) {
          t = {};
        }
        ((_this2 = _p.call(this, e, t, n) || this),
          (_this2.__isUnlinked =
            void 0 !== t.isUnlinked && null !== t.isUnlinked && t.isUnlinked));
        return _this2;
      }
      babelHelpers.inheritsLoose(b, _p);
      var _proto2 = b.prototype;
      _proto2.$config = function $config() {
        return this.config("autolink", {
          extends: _p2,
          generated: d,
          json: $,
          mergeAdjacent: !1,
        });
      };
      _proto2.shouldMergeAdjacentLink = function shouldMergeAdjacentLink(e) {
        return !1;
      };
      _proto2.getIsUnlinked = function getIsUnlinked() {
        return this.getLatest().__isUnlinked;
      };
      _proto2.setIsUnlinked = function setIsUnlinked(e) {
        var t = this.getWritable();
        return ((t.__isUnlinked = e), t);
      };
      _proto2.createDOM = function createDOM(e) {
        return this.__isUnlinked
          ? require("Lexical").$getDocument().createElement("span")
          : _p.prototype.createDOM.call(this, e);
      };
      _proto2.updateDOM = function updateDOM(e, t, n) {
        return (
          _p.prototype.updateDOM.call(this, e, t, n) ||
          e.__isUnlinked !== this.__isUnlinked
        );
      };
      return b;
    })(_p2);
    function y(e, t) {
      if (e === void 0) {
        e = "";
      }
      return require("Lexical").$applyNodeReplacement(new _b(e, t));
    }
    function T(e) {
      return e instanceof _b;
    }
    var v = _require_Lexical.createCommand("TOGGLE_LINK_COMMAND");
    function C(e, t) {
      if ("element" === e.type) {
        var _n5 = e.getNode();
        return (
          require("Lexical").$isElementNode(_n5) ||
            (function (e) {
              for (
                var _len = arguments.length,
                  t = new Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                _key < _len;
                _key++
              ) {
                t[_key - 1] = arguments[_key];
              }
              throw function (e) {
                var n = new URL("https://lexical.dev/docs/error"),
                  r = new URLSearchParams();
                r.append("code", e);
                for (
                  var _len2 = arguments.length,
                    t = new Array(_len2 > 1 ? _len2 - 1 : 0),
                    _key2 = 1;
                  _key2 < _len2;
                  _key2++
                ) {
                  t[_key2 - 1] = arguments[_key2];
                }
                for (var _e2 of t) r.append("v", _e2);
                return (
                  (n.search = r.toString()),
                  new Error(
                    "Minified Lexical error #" +
                      e +
                      "; visit " +
                      n.toString() +
                      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
                  )
                );
              }.apply(void 0, [e].concat(Array.from(t)));
            })(252),
          _n5.getChildren()[e.offset + t] || null
        );
      }
      return null;
    }
    function R(e, t) {
      if (t === void 0) {
        t = {};
      }
      var n;
      if (e && "object" == typeof e) {
        var _r3 = e.url,
          _i3 = babelHelpers.objectWithoutPropertiesLoose(e, _excluded);
        ((n = _r3), (t = babelHelpers["extends"]({}, _i3, t)));
      } else n = e;
      var _t8 = t,
        i = _t8.target,
        o = _t8.title,
        l = void 0 === t.rel ? "noreferrer" : t.rel,
        s = require("Lexical").$getSelection();
      if (
        null === s ||
        (!require("Lexical").$isRangeSelection(s) &&
          !require("Lexical").$isNodeSelection(s))
      )
        return;
      if (require("Lexical").$isNodeSelection(s)) {
        var _e3 = s.getNodes();
        if (0 === _e3.length) return;
        return void _e3.forEach(function (e) {
          if (null === n) {
            var _t9 = require("Lexical").$findMatchingParent(e, function (e) {
              return !T(e) && L(e);
            });
            _t9 &&
              (_t9.insertBefore(e),
              0 === _t9.getChildren().length && _t9.remove());
          } else {
            var _t0 = require("Lexical").$findMatchingParent(e, function (e) {
              return !T(e) && L(e);
            });
            if (_t0)
              (_t0.setURL(n),
                void 0 !== i && _t0.setTarget(i),
                void 0 !== l && _t0.setRel(l),
                void 0 !== o && _t0.setTitle(o));
            else {
              var _t1 = S(n, { rel: l, target: i, title: o });
              (e.insertBefore(_t1), _t1.append(e));
            }
          }
        });
      }
      if (s.isCollapsed() && null === n)
        for (var _e4 of s.getNodes()) {
          var _t10 = require("Lexical").$findMatchingParent(_e4, function (e) {
            return !T(e) && L(e);
          });
          return void (
            null !== _t10 &&
            (_t10
              .getParentOrThrow()
              .splice(_t10.getIndexWithinParent(), 0, _t10.getChildren()),
            _t10.remove())
          );
        }
      var a = s.extract();
      if (null === n) {
        var _e5 = new Set();
        return void a.forEach(function (t) {
          var n = require("Lexical").$findMatchingParent(t, function (e) {
            return !T(e) && L(e);
          });
          if (null !== n) {
            var _t11 = n.getKey();
            if (_e5.has(_t11)) return;
            (!(function (e, t) {
              var n = new Set(
                  t
                    .filter(function (t) {
                      return e.isParentOf(t);
                    })
                    .map(function (e) {
                      return e.getKey();
                    }),
                ),
                i = e.getChildren(),
                o = function o(i) {
                  return (
                    n.has(i.getKey()) ||
                    (require("Lexical").$isElementNode(i) &&
                      t.some(function (t) {
                        return e.isParentOf(t) && i.isParentOf(t);
                      }))
                  );
                },
                l = i.filter(o);
              if (0 === l.length && i.length > 0) return;
              if (l.length === i.length)
                return (
                  i.forEach(function (t) {
                    return e.insertBefore(t);
                  }),
                  void e.remove()
                );
              var s = i.findIndex(o),
                a = i.findLastIndex(o),
                c = 0 === s,
                u = a === i.length - 1;
              if (c)
                l.forEach(function (t) {
                  return e.insertBefore(t);
                });
              else if (u)
                for (var _t12 = l.length - 1; _t12 >= 0; _t12--)
                  e.insertAfter(l[_t12]);
              else {
                for (var _t13 = l.length - 1; _t13 >= 0; _t13--)
                  e.insertAfter(l[_t13]);
                var _t14 = i.slice(a + 1);
                if (_t14.length > 0) {
                  var _n6 = require("Lexical").$copyNode(e);
                  (l[l.length - 1].insertAfter(_n6),
                    _t14.forEach(function (e) {
                      return _n6.append(e);
                    }));
                }
              }
            })(n, a),
              _e5.add(_t11));
          }
        });
      }
      var c = new Set(),
        u = function u(e) {
          c.has(e.getKey()) ||
            (c.add(e.getKey()),
            e.setURL(n),
            void 0 !== i && e.setTarget(i),
            void 0 !== l && e.setRel(l),
            void 0 !== o && e.setTitle(o));
        };
      if (1 === a.length) {
        var _e6 = a[0],
          _t15 = require("Lexical").$findMatchingParent(_e6, L);
        if (null !== _t15) return u(_t15);
      }
      !(function (e) {
        var t = require("Lexical").$getSelection();
        if (!require("Lexical").$isRangeSelection(t)) return e();
        var n = require("Lexical").$normalizeSelection__EXPERIMENTAL(t),
          i = n.isBackward(),
          o = C(n.anchor, i ? -1 : 0),
          l = C(n.focus, i ? 0 : -1);
        e();
        if (o || l) {
          var _e7 = require("Lexical").$getSelection();
          if (require("Lexical").$isRangeSelection(_e7)) {
            var _t16 = _e7.clone();
            if (o) {
              var _e8 = o.getParent();
              _e8 &&
                _t16.anchor.set(
                  _e8.getKey(),
                  o.getIndexWithinParent() + (i ? 1 : 0),
                  "element",
                );
            }
            if (l) {
              var _e9 = l.getParent();
              _e9 &&
                _t16.focus.set(
                  _e9.getKey(),
                  l.getIndexWithinParent() + (i ? 0 : 1),
                  "element",
                );
            }
            require("Lexical").$setSelection(
              require("Lexical").$normalizeSelection__EXPERIMENTAL(_t16),
            );
          }
        }
      })(function () {
        var e = null;
        for (var _t17 of a) {
          if (!_t17.isAttached()) continue;
          var _s = require("Lexical").$findMatchingParent(_t17, L);
          if (_s) {
            u(_s);
            continue;
          }
          if (require("Lexical").$isElementNode(_t17)) {
            if (!_t17.isInline()) continue;
            if (L(_t17)) {
              if (
                !(
                  T(_t17) ||
                  (null !== e && e.getParentOrThrow().isParentOf(_t17))
                )
              ) {
                (u(_t17), (e = _t17));
                continue;
              }
              for (var _e0 of _t17.getChildren()) _t17.insertBefore(_e0);
              _t17.remove();
              continue;
            }
          }
          var _a = _t17.getPreviousSibling();
          L(_a) && _a.is(e)
            ? _a.append(_t17)
            : ((e = S(n, { rel: l, target: i, title: o })),
              _t17.insertAfter(e),
              e.append(_t17));
        }
      });
    }
    var A = /^\+?[0-9\s()-]{5,}$/;
    function E(e) {
      return e.match(/^[a-z][a-z0-9+.-]*:/i) || e.match(/^[/#.]/)
        ? e
        : e.includes("@")
          ? "mailto:" + e
          : A.test(e)
            ? "tel:" + e
            : "https://" + e;
    }
    var U = {
        build: function build(e, t) {
          return require("LexicalExtensionNamedSignals").namedSignals(t);
        },
        config: {
          created: "Link",
          createdMany: "%s links",
          destroyed: "Link removed",
          destroyedMany: "%s links removed",
          disabled: !1,
        },
        dependencies: [require("LexicalA11y").AriaLiveRegionExtension],
        name: "@lexical/link/AutoLinkAnnounce",
        register: function register(n, r, i) {
          var _i$getOutput = i.getOutput(),
            o = _i$getOutput.created,
            l = _i$getOutput.createdMany,
            s = _i$getOutput.destroyed,
            a = _i$getOutput.destroyedMany,
            c = _i$getOutput.disabled,
            u = i.getDependency(require("LexicalA11y").AriaLiveRegionExtension)
              .output.announce;
          return require("LexicalExtensionSignals").effect(function () {
            return c.value
              ? void 0
              : n.registerMutationListener(
                  _b,
                  function (e) {
                    var t = 0,
                      n = 0;
                    for (var _ref2 of e) {
                      var _r4 = _ref2[1];
                      "created" === _r4 ? t++ : "destroyed" === _r4 && n++;
                    }
                    t > 0 && 0 === n
                      ? u(
                          1 === t
                            ? o.peek()
                            : l.peek().replace("%s", String(t)),
                        )
                      : n > 0 &&
                        0 === t &&
                        u(
                          1 === n
                            ? s.peek()
                            : a.peek().replace("%s", String(n)),
                        );
                  },
                  { skipInitialization: !0 },
                );
          });
        },
      },
      M = [
        {
          $import: function $import(e, t) {
            if (!t.textContent && 0 === t.children.length) return [];
            var n = t.getAttribute("href") || "",
              r = {
                rel: t.getAttribute("rel"),
                target: t.getAttribute("target"),
                title: t.getAttribute("title"),
              };
            return require("LexicalHtml").$distributeInlineWrapper(
              e.$importChildren(t),
              function () {
                return S(n, r);
              },
            );
          },
          match: require("LexicalHtml").sel.tag("a"),
          name: "@lexical/link/a",
        },
      ];
    function O(e, n) {
      return require("Lexical").mergeRegister(
        e.registerNodeTransform(_p2, N),
        e.registerCommand(
          v,
          function (e) {
            var t = n.validateUrl.peek(),
              r = n.attributes.peek();
            if (null === e) return (R(null), !0);
            if ("string" == typeof e)
              return !((void 0 !== t && !t(e)) || (R(e, r), 0));
            {
              var _n7 = e.url,
                _i4 = babelHelpers.objectWithoutPropertiesLoose(e, _excluded2);
              return !(
                (void 0 !== t && !t(_n7)) ||
                (R(_n7, babelHelpers["extends"]({}, r, _i4)), 0)
              );
            }
          },
          require("Lexical").COMMAND_PRIORITY_EDITOR,
        ),
        require("LexicalExtensionSignals").effect(function () {
          var t = n.validateUrl.value;
          if (!t) return;
          var i = n.attributes.value;
          return e.registerCommand(
            require("Lexical").PASTE_COMMAND,
            function (n) {
              var l = require("Lexical").$getSelection();
              if (
                !require("Lexical").$isRangeSelection(l) ||
                l.isCollapsed() ||
                !require("LexicalUtils").objectKlassEquals(n, ClipboardEvent)
              )
                return !1;
              if (null === n.clipboardData) return !1;
              var s = n.clipboardData.getData("text");
              return (
                !!t(s) &&
                !l.getNodes().some(function (e) {
                  return (
                    require("Lexical").$isElementNode(e) ||
                    (require("Lexical").$isTextNode(e) && !e.isSimpleText())
                  );
                }) &&
                (e.dispatchCommand(
                  v,
                  babelHelpers["extends"]({}, i, { url: s }),
                ),
                n.preventDefault(),
                !0)
              );
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          );
        }),
      );
    }
    var P = {
      build: function build(e, t, r) {
        return require("LexicalExtensionNamedSignals").namedSignals(t);
      },
      config: { attributes: void 0, validateUrl: void 0 },
      dependencies: [
        require("LexicalHtml").CoreImportExtension,
        [require("LexicalHtml").DOMImportExtension, { rules: M }],
      ],
      mergeConfig: function mergeConfig(e, t) {
        var n = require("Lexical").shallowMergeConfig(e, t);
        return (
          e.attributes &&
            (n.attributes = require("Lexical").shallowMergeConfig(
              e.attributes,
              n.attributes,
            )),
          n
        );
      },
      name: "@lexical/link/Link",
      nodes: function nodes() {
        return [_p2];
      },
      register: function register(e, t, n) {
        return O(e, n.getOutput());
      },
    };
    function I() {
      return window;
    }
    function D(e, n, i) {
      var _n$getWindow;
      if (i === void 0) {
        i = {};
      }
      var o =
          (_n$getWindow = n.getWindow) != null
            ? _n$getWindow
            : require("LexicalExtensionSignals").signal(I),
        l = function l(t) {
          var i = 1 === t.button;
          if ("auxclick" === t.type && !i) return;
          var l = t.target;
          if (!require("Lexical").isDOMNode(l)) return;
          var s = require("Lexical").getNearestEditorFromDOMNode(l);
          if (s !== e) return;
          var a = null,
            c = null,
            u = !1;
          if (
            (s.update(function () {
              var e = require("Lexical").$getNearestNodeFromDOMNode(l);
              if (null !== e) {
                var _t18 = require("Lexical").$findMatchingParent(
                  e,
                  require("Lexical").$isElementNode,
                );
                if (!n.disabled.peek())
                  if (L(_t18))
                    ((u = T(_t18) && _t18.getIsUnlinked()),
                      (a = _t18.sanitizeUrl(_t18.getURL())),
                      (c = _t18.getTarget()));
                  else {
                    var _e1 = (function (e, t) {
                      var n = e;
                      for (; null != n; ) {
                        if (t(n)) return n;
                        n = n.parentNode;
                      }
                      return null;
                    })(l, require("Lexical").isHTMLAnchorElement);
                    null !== _e1 && ((a = _e1.href), (c = _e1.target));
                  }
              }
            }),
            null === a || "" === a || u)
          )
            return;
          var g = e.read("latest", require("Lexical").$getSelection);
          if (require("Lexical").$isRangeSelection(g) && !g.isCollapsed())
            return void t.preventDefault();
          var d =
              n.newTab.peek() || i || t.metaKey || t.ctrlKey || "_blank" === c,
            f = o.peek()(e);
          null !== f &&
            (f.open.apply(
              f,
              [a].concat(Array.from(d ? ["_blank", "noopener"] : ["_self"])),
            ),
            t.preventDefault());
        };
      return e.registerRootListener(function (e) {
        if (e)
          return require("Lexical").registerEventListeners(
            e,
            { auxclick: l, click: l },
            i,
          );
      });
    }
    var w = {
      build: function build(e, t, r) {
        return require("LexicalExtensionNamedSignals").namedSignals(t);
      },
      config: { disabled: !1, getWindow: I, newTab: !1 },
      dependencies: [P],
      name: "@lexical/link/ClickableLink",
      register: function register(e, t, n) {
        return D(e, n.getOutput());
      },
    };
    function F(e, t) {
      if (t === void 0) {
        t = function t(e) {
          return e;
        };
      }
      return function (n) {
        var r = e.exec(n);
        return null === r
          ? null
          : { index: r.index, length: r[0].length, text: r[0], url: t(r[0]) };
      };
    }
    var z =
        /((https?:\/\/(www\.)?)|(www\.))(?:[#%\+\x2D\.0-:=@-Z_a-z~\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDDB0-\uDDDB\uDDE0-\uDDE9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2-\uDFF6]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79]){1,256}\.(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDDB0-\uDDDB\uDDE0-\uDDE9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2-\uDFF6]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79]){1,6}(?:(?:[#%&\(\)\+\x2D-:=\?-Z_a-z~\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDDB0-\uDDDB\uDDE0-\uDDE9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2-\uDFF6]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79])*(?:[#&\(\)\/-9=\?-Z_a-z~\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDDB0-\uDDDB\uDDE0-\uDDE9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2-\uDFF6]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79]))?/,
      W = F(
        /(([^<>()[\]\\.,;:\s@\"]{1,64}(\.[^<>()[\]\\.,;:\s@\"]{1,64}){0,63})|(\".{1,255}\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]{1,63}\.){1,127}[a-zA-Z]{2,63}))/,
        function (e) {
          return "mailto:" + e;
        },
      );
    function j(e, t) {
      for (var _n8 = 0; _n8 < t.length; _n8++) {
        var _r5 = t[_n8](e);
        if (_r5) return _r5;
      }
      return null;
    }
    var B = /[.,;\s]/;
    function K(e, t) {
      return t.test(e);
    }
    function q(e, t) {
      return K(e[e.length - 1], t);
    }
    function H(e, t) {
      return K(e[0], t);
    }
    function J(e, t) {
      var n = e.getPreviousSibling();
      return (
        require("Lexical").$isElementNode(n) && (n = n.getLastDescendant()),
        null === n ||
          require("Lexical").$isLineBreakNode(n) ||
          (require("Lexical").$isTextNode(n) && q(n.getTextContent(), t))
      );
    }
    function V(e, t) {
      var n = e.getNextSibling();
      return (
        require("Lexical").$isElementNode(n) && (n = n.getFirstDescendant()),
        null === n ||
          require("Lexical").$isLineBreakNode(n) ||
          (require("Lexical").$isTextNode(n) && H(n.getTextContent(), t))
      );
    }
    function G(e, t, n, r, i) {
      return (
        !!(e > 0 ? K(r[e - 1], n) : J(i[0], n)) &&
        (t < r.length ? K(r[t], n) : V(i[i.length - 1], n))
      );
    }
    function Z(e, t, n) {
      var r = [],
        i = [],
        o = [];
      var l = 0,
        s = 0;
      var a = [].concat(Array.from(e));
      for (; a.length > 0; ) {
        var _e10 = a[0],
          _c = _e10.getTextContent().length,
          _u = s;
        (s + _c <= t
          ? (r.push(_e10), (l += _c))
          : _u >= n
            ? o.push(_e10)
            : i.push(_e10),
          (s += _c),
          a.shift());
      }
      return [l, r, i, o];
    }
    function X(e, t, n, i) {
      var o = y(i.url, i.attributes);
      if (1 === e.length) {
        var _s2$splitText, _s2$splitText2;
        var _l,
          _s2 = e[0];
        0 === t
          ? ((_s2$splitText = _s2.splitText(n)),
            (_l = _s2$splitText[0]),
            (_s2 = _s2$splitText[1]),
            _s2$splitText)
          : ((_s2$splitText2 = _s2.splitText(t, n)),
            (_l = _s2$splitText2[1]),
            (_s2 = _s2$splitText2[2]),
            _s2$splitText2);
        var _a2 = require("Lexical").$createTextNode(i.text);
        return (
          _a2.setFormat(_l.getFormat()),
          _a2.setDetail(_l.getDetail()),
          _a2.setStyle(_l.getStyle()),
          o.append(_a2),
          _l.replace(o),
          _s2
        );
      }
      if (e.length > 1) {
        var _i5$splitText;
        var _i5 = e[0];
        var _l2,
          _s3 = _i5.getTextContent().length;
        0 === t
          ? (_l2 = _i5)
          : ((_i5$splitText = _i5.splitText(t)),
            (_l2 = _i5$splitText[1]),
            _i5$splitText);
        var _a3 = [];
        var _c2;
        for (var _t19 = 1; _t19 < e.length; _t19++) {
          var _r6 = e[_t19],
            _i6 = _r6.getTextContent().length,
            _o = _s3;
          if (_o < n)
            if (_s3 + _i6 <= n) _a3.push(_r6);
            else {
              var _r6$splitText = _r6.splitText(n - _o),
                _e11 = _r6$splitText[0],
                _t20 = _r6$splitText[1];
              (_a3.push(_e11), (_c2 = _t20));
            }
          _s3 += _i6;
        }
        var _u2 = require("Lexical").$getSelection(),
          _g = _u2
            ? _u2.getNodes().find(require("Lexical").$isTextNode)
            : void 0,
          _d = require("Lexical").$createTextNode(_l2.getTextContent());
        return (
          _d.setFormat(_l2.getFormat()),
          _d.setDetail(_l2.getDetail()),
          _d.setStyle(_l2.getStyle()),
          o.append.apply(o, [_d].concat(Array.from(_a3))),
          _g &&
            _g === _l2 &&
            (require("Lexical").$isRangeSelection(_u2)
              ? _d.select(_u2.anchor.offset, _u2.focus.offset)
              : require("Lexical").$isNodeSelection(_u2) &&
                _d.select(0, _d.getTextContent().length)),
          _l2.replace(o),
          _c2
        );
      }
    }
    function Y(e, t, n, i) {
      var o = e.getChildren(),
        l = o.length;
      for (var _t21 = 0; _t21 < l; _t21++) {
        var _i7 = o[_t21];
        if (!require("Lexical").$isTextNode(_i7) || !_i7.isSimpleText())
          return (Q(e), void n(null, e.getURL()));
      }
      var s = e.getTextContent(),
        a = j(s, t);
      if (null === a || a.text !== s) return (Q(e), void n(null, e.getURL()));
      if (!J(e, i) || !V(e, i)) return (Q(e), void n(null, e.getURL()));
      var c = e.getURL();
      (c !== a.url && (e.setURL(a.url), n(a.url, c)),
        a.attributes &&
          (e.getRel() !== a.attributes.rel &&
            e.setRel(a.attributes.rel || null),
          e.getTarget() !== a.attributes.target &&
            e.setTarget(a.attributes.target || null),
          e.getTitle() !== a.attributes.title &&
            e.setTitle(a.attributes.title || null)));
    }
    function Q(e) {
      var t = e.getChildren();
      for (var _n9 = t.length - 1; _n9 >= 0; _n9--) e.insertAfter(t[_n9]);
      return (
        e.remove(),
        t.map(function (e) {
          return e.getLatest();
        })
      );
    }
    var ee = {
      changeHandlers: [],
      excludeParents: [],
      matchers: [],
      separatorRegex: B,
    };
    function te(e, t) {
      if (t === void 0) {
        t = ee;
      }
      var _t22 = t,
        n = _t22.matchers,
        i = _t22.changeHandlers,
        o = _t22.excludeParents,
        _t22$separatorRegex = _t22.separatorRegex,
        l = _t22$separatorRegex === void 0 ? B : _t22$separatorRegex,
        s = function s(e, t) {
          for (var _n0 of i) _n0(e, t);
        };
      return require("Lexical").mergeRegister(
        e.registerNodeTransform(require("Lexical").TextNode, function (e) {
          var t = e.getParentOrThrow(),
            i = e.getPreviousSibling();
          if (T(t)) Y(t, n, s, l);
          else if (
            !L(t) &&
            !o.some(function (e) {
              return e(t);
            })
          ) {
            if (e.isSimpleText() && (H(e.getTextContent(), l) || !T(i))) {
              var _t23 = (function (e) {
                var t = [e];
                var n = e.getNextSibling();
                for (
                  ;
                  null !== n &&
                  require("Lexical").$isTextNode(n) &&
                  n.isSimpleText() &&
                  (t.push(n), !/[\s]/.test(n.getTextContent()));
                )
                  n = n.getNextSibling();
                return t;
              })(e);
              !(function (e, t, n, r) {
                for (var _t24 of e) {
                  var _e12 = _t24.getParent();
                  if (T(_e12) && !_e12.getIsUnlinked()) return;
                }
                var i = [].concat(Array.from(e));
                var o = i
                  .map(function (e) {
                    return e.getTextContent();
                  })
                  .join("");
                var l,
                  s = o,
                  a = 0;
                for (; (l = j(s, t)) && null !== l; ) {
                  var _e13 = l.index,
                    _t25 = _e13 + l.length;
                  if (G(a + _e13, a + _t25, r, o, i)) {
                    var _Z = Z(i, a + _e13, a + _t25),
                      _r7 = _Z[0],
                      _o2 = _Z[2],
                      _c3 = _Z[3];
                    var _u3 = !1;
                    for (var _e14 of _o2) {
                      var _t26 = _e14.getParent();
                      if (T(_t26) && !_t26.getIsUnlinked()) {
                        _u3 = !0;
                        break;
                      }
                    }
                    if (_u3) {
                      ((a += _t25), (s = s.substring(_t25)));
                      continue;
                    }
                    var _g2 = X(_o2, a + _e13 - _r7, a + _t25 - _r7, l);
                    ((i = _g2 ? [_g2].concat(Array.from(_c3)) : _c3),
                      n(l.url, null),
                      (a = 0));
                  } else a += _t25;
                  s = s.substring(_t25);
                }
              })(_t23, n, s, l);
            }
            !(function (e, t, n, r) {
              var i = e.getParent(),
                o = e.getPreviousSibling(),
                l = e.getNextSibling(),
                s = e.getTextContent();
              if (!T(i) || i.getIsUnlinked()) {
                if (
                  T(o) &&
                  !o.getIsUnlinked() &&
                  o.is(e.getPreviousSibling()) &&
                  e.getParent() === o.getParent()
                ) {
                  if (!H(s, r)) return (Q(o), void n(null, o.getURL()));
                  if (
                    ((a = s),
                    o.isEmailURI()
                      ? /^\.[a-zA-Z]{2,}/.test(a)
                      : /^\.[a-zA-Z0-9]{1,}/.test(a))
                  ) {
                    var _i8 = o.getTextContent() + s,
                      _l3 = j(_i8, t);
                    null !== _l3 &&
                      _l3.text === _i8 &&
                      (o.append(e), Y(o, t, n, r), n(null, o.getURL()));
                  }
                }
                var a;
                !T(l) ||
                  l.getIsUnlinked() ||
                  q(s, r) ||
                  (l.is(e.getNextSibling()) &&
                    e.getParent() === l.getParent() &&
                    (Q(l), n(null, l.getURL())));
              }
            })(e, n, s, l);
          }
        }),
        e.registerCommand(
          v,
          function (e) {
            var t = require("Lexical").$getSelection();
            return (
              !(null !== e || !require("Lexical").$isRangeSelection(t)) &&
              (t.extract().forEach(function (e) {
                var t = e.getParent();
                T(t) && (t.setIsUnlinked(!t.getIsUnlinked()), t.markDirty());
              }),
              !1)
            );
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
      );
    }
    var ne = {
      config: ee,
      dependencies: [U, P],
      mergeConfig: function mergeConfig(e, t) {
        var n = require("Lexical").shallowMergeConfig(e, t);
        for (var _r8 of ["matchers", "changeHandlers", "excludeParents"]) {
          var _i9 = t[_r8];
          Array.isArray(_i9) &&
            (n[_r8] = [].concat(Array.from(e[_r8]), Array.from(_i9)));
        }
        return n;
      },
      name: "@lexical/link/AutoLink",
      nodes: [_b],
      register: te,
    };
    ((exports.$createAutoLinkNode = y),
      (exports.$createLinkNode = S),
      (exports.$isAutoLinkNode = T),
      (exports.$isLinkNode = L),
      (exports.$toggleLink = R),
      (exports.AutoLinkAnnounceExtension = U),
      (exports.AutoLinkExtension = ne),
      (exports.AutoLinkNode = _b),
      (exports.ClickableLinkExtension = w),
      (exports.LinkExtension = P),
      (exports.LinkImportRules = M),
      (exports.LinkNode = _p2),
      (exports.TOGGLE_LINK_COMMAND = v),
      (exports.autoLinkEmailMatcher = W),
      (exports.autoLinkUrlMatcher = function (e) {
        var t = z.exec(e);
        if (null === t) return null;
        var n = t[0],
          r = 0;
        for (var _e15 of n) "(" === _e15 ? r++ : ")" === _e15 && r--;
        for (; r < 0 && n.endsWith(")"); ) ((n = n.slice(0, -1)), r++);
        return {
          index: t.index,
          length: n.length,
          text: n,
          url: n.startsWith("http") ? n : "https://" + n,
        };
      }),
      (exports.createLinkMatcherWithRegExp = F),
      (exports.formatUrl = E),
      (exports.registerAutoLink = te),
      (exports.registerClickableLink = D),
      (exports.registerLink = O));
  },
  null,
);
