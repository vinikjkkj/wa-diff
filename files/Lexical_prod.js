__d(
  "Lexical.prod",
  [],
  function $module_Lexical_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _P, _F;
    function t(t) {
      var n = new URL("https://lexical.dev/docs/error"),
        r = new URLSearchParams();
      r.append("code", t);
      for (
        var _len = arguments.length,
          e = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        e[_key - 1] = arguments[_key];
      }
      for (var _t2 of e) r.append("v", _t2);
      throw (
        (n.search = r.toString()),
        Error(
          "Minified Lexical error #" +
            t +
            "; visit " +
            n.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        )
      );
    }
    function e(t) {
      for (
        var _len2 = arguments.length,
          e = new Array(_len2 > 1 ? _len2 - 1 : 0),
          _key2 = 1;
        _key2 < _len2;
        _key2++
      ) {
        e[_key2 - 1] = arguments[_key2];
      }
      var n = new URL("https://lexical.dev/docs/error"),
        r = new URLSearchParams();
      r.append("code", t);
      for (var _t3 of e) r.append("v", _t3);
      ((n.search = r.toString()),
        console.warn(
          "Minified Lexical warning #" +
            t +
            "; visit " +
            n.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        ));
    }
    var n =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
      r = n && "documentMode" in document ? document.documentMode : null,
      o = n && /Mac|iPod|iPhone|iPad/.test(navigator.platform),
      i = n && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
      s =
        !(!n || !("InputEvent" in window) || r) &&
        "getTargetRanges" in new window.InputEvent("input"),
      l = n && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
      a = n && /Android/.test(navigator.userAgent),
      c = n && /Version\/[\d.]+.*Safari/.test(navigator.userAgent) && !a,
      u = n && /^(?=.*Chrome).*/i.test(navigator.userAgent),
      f = n && a && u,
      d = n && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && o && !u,
      h = 0,
      g = 1,
      _ = 2,
      p = 128,
      y = 1,
      m = 2,
      x = 3,
      C = 4,
      S = 5,
      N = 6,
      T = c || l || d ? "\xa0" : "\u200b",
      v = "\n\n",
      k = i ? "\xa0" : T,
      E = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      O =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff",
      M = new RegExp("^[^" + O + "]*[" + E + "]"),
      b = new RegExp("^[^" + E + "]*[" + O + "]"),
      A = {
        bold: 1,
        capitalize: 1024,
        code: 16,
        highlight: p,
        italic: 2,
        lowercase: 256,
        strikethrough: 4,
        subscript: 32,
        superscript: 64,
        underline: 8,
        uppercase: 512,
      },
      w = { directionless: 1, unmergeable: 2 },
      D = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 },
      P =
        ((_P = {}),
        (_P[m] = "center"),
        (_P[N] = "end"),
        (_P[C] = "justify"),
        (_P[y] = "left"),
        (_P[x] = "right"),
        (_P[S] = "start"),
        _P),
      I = { normal: 0, segmented: 2, token: 1 },
      F =
        ((_F = {}),
        (_F[h] = "normal"),
        (_F[_] = "segmented"),
        (_F[g] = "token"),
        _F),
      L = "$config";
    function R(t, e, n, r, o, i) {
      var s = t.getFirstChild();
      for (; null !== s; ) {
        var _t4 = s.__key;
        (s.__parent === e &&
          (fo(s) && R(s, _t4, n, r, o, i),
          n.has(_t4) || i["delete"](_t4),
          o.push(_t4)),
          (s = s.getNextSibling()));
      }
    }
    var K = !1,
      B = 0;
    function z(t) {
      B = t.timeStamp;
    }
    function W(t, e, n) {
      var r = "BR" === t.nodeName,
        o = e.__lexicalLineBreak;
      return (
        (o && (t === o || (r && t.previousSibling === o))) ||
        (r && void 0 !== oi(t, n))
      );
    }
    function $(t, e, n) {
      var r = Vi(Bi(n));
      var o = null,
        i = null;
      null !== r &&
        r.anchorNode === t &&
        ((o = r.anchorOffset), (i = r.focusOffset));
      var s = t.nodeValue;
      null !== s && yi(e, s, o, i, !1);
    }
    function U(t, e, n) {
      if (ur(t)) {
        var _e2 = t.anchor.getNode();
        if (_e2.is(n) && t.format !== _e2.getFormat()) return !1;
      }
      return Ho(e) && n.isAttached();
    }
    function J(t, e, n, r) {
      for (var _o2 = t; _o2 && !as(_o2); _o2 = Pi(_o2)) {
        var _t5 = oi(_o2, e);
        if (void 0 !== _t5) {
          var _e3 = ni(_t5, n);
          if (_e3) return _o(_e3) || !qi(_o2) ? void 0 : [_o2, _e3];
        } else if (_o2 === r) return [r, ci(n)];
      }
    }
    function Y(t, e, n) {
      K = !0;
      var r = performance.now() - B > 100;
      try {
        lo(t, function () {
          var o =
              Er() ||
              (function (t) {
                return t.getEditorState().read(function () {
                  var t = Er();
                  return null !== t ? t.clone() : null;
                });
              })(t),
            s = new Map(),
            l = t.getRootElement(),
            a = t._editorState,
            c = t._blockCursorElement;
          var u = !1,
            f = "";
          for (var _n2 = 0; _n2 < e.length; _n2++) {
            var _d = e[_n2],
              _h = _d.type,
              _g = _d.target,
              _2 = J(_g, t, a, l);
            if (!_2) continue;
            var _p = _2[0],
              _y = _2[1];
            if ("characterData" === _h)
              r && tr(_y) && Ho(_g) && U(o, _g, _y) && $(_g, _y, t);
            else if ("childList" === _h) {
              u = !0;
              var _e4 = _d.addedNodes;
              for (var _n3 = 0; _n3 < _e4.length; _n3++) {
                var _r2 = _e4[_n3],
                  _o3 = ri(_r2),
                  _s2 = _r2.parentNode;
                if (
                  null != _s2 &&
                  _r2 !== c &&
                  null === _o3 &&
                  !W(_r2, _s2, t)
                ) {
                  if (i) {
                    var _t6 = (qi(_r2) ? _r2.innerText : null) || _r2.nodeValue;
                    _t6 && (f += _t6);
                  }
                  _s2.removeChild(_r2);
                }
              }
              var _n4 = _d.removedNodes,
                _r3 = _n4.length;
              if (_r3 > 0) {
                var _e5 = 0;
                for (var _o4 = 0; _o4 < _r3; _o4++) {
                  var _r4 = _n4[_o4];
                  (W(_r4, _g, t) || c === _r4) && (_g.appendChild(_r4), _e5++);
                }
                _r3 !== _e5 && s.set(_p, _y);
              }
            }
          }
          if (s.size > 0)
            for (var _ref2 of s) {
              var _e6 = _ref2[0];
              var _n5 = _ref2[1];
              _n5.reconcileObservedMutation(_e6, t);
            }
          var d = n.takeRecords();
          if (d.length > 0) {
            for (var _e7 = 0; _e7 < d.length; _e7++) {
              var _n6 = d[_e7],
                _r5 = _n6.addedNodes,
                _o5 = _n6.target;
              for (var _e8 = 0; _e8 < _r5.length; _e8++) {
                var _n7 = _r5[_e8],
                  _i2 = _n7.parentNode;
                null == _i2 ||
                  "BR" !== _n7.nodeName ||
                  W(_n7, _o5, t) ||
                  _i2.removeChild(_n7);
              }
            }
            n.takeRecords();
          }
          null !== o && (u && ui(o), i && Ai(t) && o.insertRawText(f));
        });
      } finally {
        K = !1;
      }
    }
    function j(t) {
      var e = t._observer;
      if (null !== e) {
        Y(t, e.takeRecords(), e);
      }
    }
    function H(t) {
      (!(function (t) {
        0 === B && Bi(t).addEventListener("textInput", z, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          Y(t, e, n);
        })));
    }
    var V = function V(t, e) {
      ((this.key = t),
        (this.parse = e.parse.bind(e)),
        (this.unparse = (e.unparse || et).bind(e)),
        (this.isEqual = (e.isEqual || Object.is).bind(e)),
        (this.defaultValue = this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function G(t, e, n) {
      if (n === void 0) {
        n = "latest";
      }
      var r = ("latest" === n ? t.getLatest() : t).__state;
      return r ? r.getValue(e) : e.defaultValue;
    }
    function q(t) {
      var e = new Map(),
        n = new Set();
      for (
        var _r6 = "function" == typeof t ? t : t.replace;
        _r6.prototype && void 0 !== _r6.prototype.getType;
        _r6 = Object.getPrototypeOf(_r6)
      ) {
        var _us = us(_r6),
          _t7 = _us.ownNodeConfig;
        if (_t7 && _t7.stateConfigs)
          for (var _r7 of _t7.stateConfigs) {
            var _t8 = void 0;
            ("stateConfig" in _r7
              ? ((_t8 = _r7.stateConfig), _r7.flat && n.add(_t8.key))
              : (_t8 = _r7),
              e.set(_t8.key, _t8));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var _X = (function () {
      function X(t, e, n, r, o) {
        if (n === void 0) {
          n = void 0;
        }
        if (r === void 0) {
          r = new Map();
        }
        if (o === void 0) {
          o = void 0;
        }
        ((this.node = t),
          (this.sharedNodeState = e),
          (this.unknownState = n),
          (this.knownState = r));
        var i = this.sharedNodeState.sharedConfigMap,
          s =
            void 0 !== o
              ? o
              : (function (t, e, n) {
                  var r = n.size;
                  if (e)
                    for (var _o6 in e) {
                      var _e9 = t.get(_o6);
                      (_e9 && n.has(_e9)) || r++;
                    }
                  return r;
                })(i, n, r);
        this.size = s;
      }
      var _proto = X.prototype;
      _proto.getValue = function getValue(t) {
        var e = this.knownState.get(t);
        if (void 0 !== e) return e;
        this.sharedNodeState.sharedConfigMap.set(t.key, t);
        var n = t.defaultValue;
        if (this.unknownState && t.key in this.unknownState) {
          var _e0 = this.unknownState[t.key];
          (void 0 !== _e0 && (n = t.parse(_e0)), this.updateFromKnown(t, n));
        }
        return n;
      };
      _proto.getInternalState = function getInternalState() {
        return [this.unknownState, this.knownState];
      };
      _proto.toJSON = function toJSON() {
        var t = babelHelpers["extends"]({}, this.unknownState),
          e = {};
        for (var _ref4 of this.knownState) {
          var _e1 = _ref4[0];
          var _n8 = _ref4[1];
          _e1.isEqual(_n8, _e1.defaultValue)
            ? delete t[_e1.key]
            : (t[_e1.key] = _e1.unparse(_n8));
        }
        for (var _n9 of this.sharedNodeState.flatKeys)
          _n9 in t && ((e[_n9] = t[_n9]), delete t[_n9]);
        return (tt(t) && (e.$ = t), e);
      };
      _proto.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          r = new Map(this.knownState);
        return new X(
          t,
          e,
          (function (t, e, n) {
            var r;
            if (n)
              for (var _ref6 of Object.entries(n)) {
                var _o7 = _ref6[0];
                var _i3 = _ref6[1];
                {
                  var _n0 = t.get(_o7);
                  _n0
                    ? e.has(_n0) || e.set(_n0, _n0.parse(_i3))
                    : ((r = r || {}), (r[_o7] = _i3));
                }
              }
            return r;
          })(e.sharedConfigMap, r, n),
          r,
          this.size,
        );
      };
      _proto.resetOnCopyNode = function resetOnCopyNode() {
        for (var _t9 of this.knownState.keys())
          _t9.resetOnCopyNode && this.knownState.set(_t9, _t9.defaultValue);
        return this;
      };
      _proto.updateFromKnown = function updateFromKnown(t, e) {
        var n = t.key;
        this.sharedNodeState.sharedConfigMap.set(n, t);
        var r = this.knownState,
          o = this.unknownState;
        (r.has(t) ||
          (o && n in o) ||
          (o && (delete o[n], (this.unknownState = tt(o))), this.size++),
          r.set(t, e));
      };
      _proto.updateFromUnknown = function updateFromUnknown(t, e) {
        var n = this.sharedNodeState.sharedConfigMap.get(t);
        n
          ? this.updateFromKnown(n, n.parse(e))
          : ((this.unknownState = this.unknownState || {}),
            t in this.unknownState || this.size++,
            (this.unknownState[t] = e));
      };
      _proto.updateFromJSON = function updateFromJSON(t) {
        var e = this.knownState;
        for (var _t0 of e.keys()) e.set(_t0, _t0.defaultValue);
        if (((this.size = e.size), (this.unknownState = void 0), t))
          for (var _ref8 of Object.entries(t)) {
            var _e10 = _ref8[0];
            var _n1 = _ref8[1];
            this.updateFromUnknown(_e10, _n1);
          }
      };
      return X;
    })();
    function Q(t) {
      var e = t.getWritable(),
        n = e.__state ? e.__state.getWritable(e) : new _X(e, Z(e));
      return ((e.__state = n), n);
    }
    function Z(t) {
      return t.__state
        ? t.__state.sharedNodeState
        : Lo(ns(), t.getType()).sharedNodeState;
    }
    function tt(t) {
      if (t) for (var _e11 in t) return t;
    }
    function et(t) {
      return t;
    }
    function nt(t, e, n) {
      for (var _ref0 of e.knownState) {
        var _r8 = _ref0[0];
        var _o8 = _ref0[1];
        {
          if (t.has(_r8.key)) continue;
          t.add(_r8.key);
          var _e12 = n ? n.getValue(_r8) : _r8.defaultValue;
          if (_e12 !== _o8 && !_r8.isEqual(_e12, _o8)) return !0;
        }
      }
      return !1;
    }
    function rt(t, e, n) {
      var r = e.unknownState,
        o = n ? n.unknownState : void 0;
      if (r)
        for (var _ref10 of Object.entries(r)) {
          var _e13 = _ref10[0];
          var _n10 = _ref10[1];
          if (t.has(_e13)) continue;
          t.add(_e13);
          if (_n10 !== (o ? o[_e13] : void 0)) return !0;
        }
      return !1;
    }
    function ot(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function it(t, e) {
      var n = t.__mode,
        r = t.__format,
        o = t.__style,
        i = e.__mode,
        s = e.__format,
        l = e.__style,
        a = t.__state,
        c = e.__state;
      return (
        (null === n || n === i) &&
        (null === r || r === s) &&
        (null === o || o === l) &&
        (null === t.__state ||
          a === c ||
          (function (t, e) {
            if (t === e) return !0;
            var n = new Set();
            return !(
              (t && nt(n, t, e)) ||
              (e && nt(n, e, t)) ||
              (t && rt(n, t, e)) ||
              (e && rt(n, e, t))
            );
          })(a, c))
      );
    }
    function st(t, e) {
      var n = t.mergeWithSibling(e),
        r = Vr()._normalizedNodes;
      return (r.add(t.__key), r.add(e.__key), n);
    }
    function lt(t) {
      var e,
        n,
        r = t;
      if ("" !== r.__text || !r.isSimpleText() || r.isUnmergeable()) {
        for (
          ;
          null !== (e = r.getPreviousSibling()) &&
          tr(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (it(e, r)) {
              r = st(e, r);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = r.getNextSibling()) &&
          tr(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (it(r, n)) {
              r = st(r, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else r.remove();
    }
    function at(t) {
      return (ct(t.anchor), ct(t.focus), t);
    }
    function ct(t) {
      for (; "element" === t.type; ) {
        var _e14 = t.getNode(),
          _n11 = t.offset;
        var _r9 = void 0,
          _o9 = void 0;
        if (
          (_n11 === _e14.getChildrenSize()
            ? ((_r9 = _e14.getChildAtIndex(_n11 - 1)), (_o9 = !0))
            : ((_r9 = _e14.getChildAtIndex(_n11)), (_o9 = !1)),
          tr(_r9))
        ) {
          t.set(_r9.__key, _o9 ? _r9.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!fo(_r9)) break;
        t.set(_r9.__key, _o9 ? _r9.getChildrenSize() : 0, "element", !0);
      }
    }
    var ut,
      ft,
      dt,
      ht,
      gt,
      _t,
      pt,
      yt,
      mt,
      xt,
      Ct = "",
      St = null,
      Nt = null,
      Tt = !1,
      vt = !1;
    function kt(t, e) {
      var n = pt.get(t);
      if (null !== e) {
        var _n12 = Ut(t);
        _n12.parentNode === e && e.removeChild(_n12);
      }
      if ((yt.has(t) || ft._keyToDOMMap["delete"](t), fo(n))) {
        var _t1 = Rt(n, pt);
        Et(_t1, 0, _t1.length - 1, null);
      }
      void 0 !== n && Oi(xt, dt, ht, n, "destroyed");
    }
    function Et(t, e, n, r) {
      for (var _o0 = e; _o0 <= n; ++_o0) {
        var _e15 = t[_o0];
        void 0 !== _e15 && kt(_e15, r);
      }
    }
    function Ot(t, e) {
      t.setProperty("text-align", e);
    }
    var Mt = "40px";
    function bt(t, e) {
      var n = ut.theme.indent;
      if ("string" == typeof n) {
        var _r0 = t.classList.contains(n);
        e > 0 && !_r0
          ? t.classList.add(n)
          : e < 1 && _r0 && t.classList.remove(n);
      }
      if (0 === e) return void t.style.setProperty("padding-inline-start", "");
      var r =
        getComputedStyle(ft._rootElement || t).getPropertyValue(
          "--lexical-indent-base-value",
        ) || Mt;
      t.style.setProperty(
        "padding-inline-start",
        "calc(" + e + " * " + r + ")",
      );
    }
    function At(t, e) {
      var n = t.style;
      0 === e
        ? Ot(n, "")
        : 1 === e
          ? Ot(n, "left")
          : 2 === e
            ? Ot(n, "center")
            : 3 === e
              ? Ot(n, "right")
              : 4 === e
                ? Ot(n, "justify")
                : 5 === e
                  ? Ot(n, "start")
                  : 6 === e && Ot(n, "end");
    }
    function wt(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (yo(t)) return null;
        var n = t.getParentOrThrow();
        return yo(n) && null === n.__dir ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function Dt(e, n) {
      var r = yt.get(e);
      void 0 === r && t(60);
      var o = r.createDOM(ut, ft);
      if (
        ((function (t, e, n) {
          var r = n._keyToDOMMap;
          ((function (t, e, n) {
            var r = "__lexicalKey_" + e._key;
            t[r] = n;
          })(e, n, t),
            r.set(t, e));
        })(e, o, ft),
        tr(r)
          ? o.setAttribute("data-lexical-text", "true")
          : _o(r) && o.setAttribute("data-lexical-decorator", "true"),
        fo(r))
      ) {
        var _t10 = r.__indent,
          _e16 = r.__size;
        if ((wt(o, r), 0 !== _t10 && bt(o, _t10), 0 !== _e16)) {
          var _t11 = _e16 - 1;
          Pt(Rt(r, yt), r, 0, _t11, r.getDOMSlot(o));
        }
        var _n13 = r.__format;
        (0 !== _n13 && At(o, _n13), r.isInline() || Ft(null, r, o));
      } else {
        var _t12 = r.getTextContent();
        if (_o(r)) {
          var _t13 = r.decorate(ft, ut);
          (null !== _t13 && Bt(e, _t13), (o.contentEditable = "false"));
        }
        Ct += _t12;
      }
      return (null !== n && n.insertChild(o), Oi(xt, dt, ht, r, "created"), o);
    }
    function Pt(t, e, n, r, o) {
      var i = Ct;
      Ct = "";
      var s = n;
      for (; s <= r; ++s) {
        Dt(t[s], o);
        var _e17 = yt.get(t[s]);
        null !== _e17 && tr(_e17)
          ? null === St && ((St = _e17.getFormat()), (Nt = _e17.getStyle()))
          : fo(_e17) && s < r && !_e17.isInline() && (Ct += v);
      }
      ((o.element.__lexicalTextContent = Ct), (Ct = i + Ct));
    }
    function It(t, e) {
      if (t) {
        var _n14 = t.__last;
        if (_n14) {
          var _t14 = e.get(_n14);
          if (_t14)
            return Ln(_t14)
              ? "line-break"
              : _o(_t14) && _t14.isInline()
                ? "decorator"
                : null;
        }
        return "empty";
      }
      return null;
    }
    function Ft(t, e, n) {
      var r = It(t, pt),
        o = It(e, yt);
      r !== o && e.getDOMSlot(n).setManagedLineBreak(o);
    }
    function Lt(e, n, r) {
      var o;
      ((St = null),
        (Nt = null),
        (function (e, n, r) {
          var o = Ct,
            i = e.__size,
            s = n.__size;
          Ct = "";
          var l = r.element;
          if (1 === i && 1 === s) {
            var _t15 = e.__first,
              _r1 = n.__first;
            if (_t15 === _r1) Kt(_t15, l);
            else {
              var _e18 = Ut(_t15),
                _n15 = Dt(_r1, null);
              try {
                l.replaceChild(_n15, _e18);
              } catch (o) {
                if ("object" == typeof o && null != o) {
                  var _i4 =
                    o.toString() +
                    " Parent: " +
                    l.tagName +
                    ", new child: {tag: " +
                    _n15.tagName +
                    " key: " +
                    _r1 +
                    "}, old child: {tag: " +
                    _e18.tagName +
                    ", key: " +
                    _t15 +
                    "}.";
                  throw new Error(_i4);
                }
                throw o;
              }
              kt(_t15, null);
            }
            var _o1 = yt.get(_r1);
            tr(_o1) &&
              null === St &&
              ((St = _o1.getFormat()), (Nt = _o1.getStyle()));
          } else {
            var _o10 = Rt(e, pt),
              _a = Rt(n, yt);
            if (
              (_o10.length !== i && t(227), _a.length !== s && t(228), 0 === i)
            )
              0 !== s && Pt(_a, 0, 0, s - 1, r);
            else if (0 === s) {
              if (0 !== i) {
                var _t16 =
                  null == r.after &&
                  null == r.before &&
                  null == r.element.__lexicalLineBreak;
                (Et(_o10, 0, i - 1, _t16 ? null : l),
                  _t16 && (l.textContent = ""));
              }
            } else
              !(function (t, e, n, r, o, i) {
                var s = r - 1,
                  l = o - 1;
                var a,
                  c,
                  u = i.getFirstChild(),
                  f = 0,
                  d = 0;
                for (; f <= s && d <= l; ) {
                  var _t17 = e[f],
                    _r10 = n[d];
                  if (_t17 === _r10) ((u = zt(Kt(_r10, i.element))), f++, d++);
                  else {
                    if ((void 0 === c && (c = Wt(n, d)), void 0 === a))
                      a = Wt(e, f);
                    else if (!a.has(_t17)) {
                      f++;
                      continue;
                    }
                    if (!c.has(_t17)) {
                      ((u = zt(Ut(_t17))),
                        kt(_t17, i.element),
                        f++,
                        a["delete"](_t17));
                      continue;
                    }
                    if (a.has(_r10)) {
                      var _t18 = Di(ft, _r10);
                      (_t18 !== u && i.withBefore(u).insertChild(_t18),
                        (u = zt(Kt(_r10, i.element))),
                        f++,
                        d++);
                    } else (Dt(_r10, i.withBefore(u)), d++);
                  }
                  var _o11 = yt.get(_r10);
                  null !== _o11 && tr(_o11)
                    ? null === St &&
                      ((St = _o11.getFormat()), (Nt = _o11.getStyle()))
                    : fo(_o11) && d <= l && !_o11.isInline() && (Ct += v);
                }
                var h = f > s,
                  g = d > l;
                if (h && !g) {
                  var _t19 = n[l + 1],
                    _e19 = void 0 === _t19 ? null : ft.getElementByKey(_t19);
                  Pt(n, 0, d, l, i.withBefore(_e19));
                } else g && !h && Et(e, f, s, i.element);
              })(0, _o10, _a, i, s, r);
          }
          ((l.__lexicalTextContent = Ct), (Ct = o + Ct));
        })(e, n, n.getDOMSlot(r)),
        (o = n),
        null == St || St === o.__textFormat || vt || o.setTextFormat(St),
        (function (t) {
          null == Nt || Nt === t.__textStyle || vt || t.setTextStyle(Nt);
        })(n));
    }
    function Rt(e, n) {
      var r = [];
      var o = e.__first;
      for (; null !== o; ) {
        var _e20 = n.get(o);
        (void 0 === _e20 && t(101), r.push(o), (o = _e20.__next));
      }
      return r;
    }
    function Kt(e, n) {
      var r = pt.get(e);
      var o = yt.get(e);
      (void 0 !== r && void 0 !== o) || t(61);
      var i = Tt || _t.has(e) || gt.has(e),
        s = Di(ft, e);
      if (r === o && !i) {
        var _t20;
        if (fo(r)) {
          var _e21 = s.__lexicalTextContent;
          "string" == typeof _e21
            ? (_t20 = _e21)
            : ((_t20 = r.getTextContent()), (s.__lexicalTextContent = _t20));
        } else _t20 = r.getTextContent();
        return ((Ct += _t20), s);
      }
      if (
        (r !== o && i && Oi(xt, dt, ht, o, "updated"), o.updateDOM(r, s, ut))
      ) {
        var _r11 = Dt(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_r11, s),
          kt(e, null),
          _r11
        );
      }
      if (fo(r)) {
        fo(o) || t(334, e);
        var _n16 = o.__indent;
        (Tt || _n16 !== r.__indent) && bt(s, _n16);
        var _l = o.__format;
        if (((Tt || _l !== r.__format) && At(s, _l), i))
          (Lt(r, o, s), yo(o) || o.isInline() || Ft(r, o, s));
        else {
          var _t21 = s.__lexicalTextContent;
          var _e22;
          ("string" == typeof _t21
            ? (_e22 = _t21)
            : ((_e22 = r.getTextContent()), (s.__lexicalTextContent = _e22)),
            (Ct += _e22));
        }
        if ((Tt || o.__dir !== r.__dir) && (wt(s, o), yo(o) && !Tt))
          for (var _t22 of o.getChildren())
            if (fo(_t22)) {
              wt(Di(ft, _t22.getKey()), _t22);
            }
      } else {
        var _t23 = o.getTextContent();
        if (_o(o)) {
          var _t24 = o.decorate(ft, ut);
          null !== _t24 && Bt(e, _t24);
        }
        Ct += _t23;
      }
      if (!vt && yo(o) && o.__cachedText !== Ct) {
        var _t25 = o.getWritable();
        ((_t25.__cachedText = Ct), (o = _t25));
      }
      return s;
    }
    function Bt(t, e) {
      var n = ft._pendingDecorators;
      var r = ft._decorators;
      if (null === n) {
        if (r[t] === e) return;
        n = si(ft);
      }
      n[t] = e;
    }
    function zt(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === ft._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function Wt(t, e) {
      var n = new Set();
      for (var _r12 = e; _r12 < t.length; _r12++) n.add(t[_r12]);
      return n;
    }
    function $t(t, e, n, r, o, i) {
      ((Ct = ""),
        (Tt = 2 === r),
        (ft = n),
        (ut = n._config),
        (dt = n._nodes),
        (ht = ft._listeners.mutation),
        (gt = o),
        (_t = i),
        (pt = t._nodeMap),
        (yt = e._nodeMap),
        (vt = e._readOnly),
        (mt = new Map(n._keyToDOMMap)));
      var s = new Map();
      return (
        (xt = s),
        Kt("root", null),
        (ft = void 0),
        (dt = void 0),
        (gt = void 0),
        (_t = void 0),
        (pt = void 0),
        (yt = void 0),
        (ut = void 0),
        (mt = void 0),
        (xt = void 0),
        s
      );
    }
    function Ut(e) {
      var n = mt.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function Jt(t) {
      return { type: t };
    }
    var Yt = Jt("SELECTION_CHANGE_COMMAND"),
      jt = Jt("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      Ht = Jt("CLICK_COMMAND"),
      Vt = Jt("BEFORE_INPUT_COMMAND"),
      Gt = Jt("INPUT_COMMAND"),
      qt = Jt("COMPOSITION_START_COMMAND"),
      Xt = Jt("COMPOSITION_END_COMMAND"),
      Qt = Jt("DELETE_CHARACTER_COMMAND"),
      Zt = Jt("INSERT_LINE_BREAK_COMMAND"),
      te = Jt("INSERT_PARAGRAPH_COMMAND"),
      ee = Jt("CONTROLLED_TEXT_INSERTION_COMMAND"),
      ne = Jt("PASTE_COMMAND"),
      re = Jt("REMOVE_TEXT_COMMAND"),
      oe = Jt("DELETE_WORD_COMMAND"),
      ie = Jt("DELETE_LINE_COMMAND"),
      se = Jt("FORMAT_TEXT_COMMAND"),
      le = Jt("UNDO_COMMAND"),
      ae = Jt("REDO_COMMAND"),
      ce = Jt("KEYDOWN_COMMAND"),
      ue = Jt("KEY_ARROW_RIGHT_COMMAND"),
      fe = Jt("MOVE_TO_END"),
      de = Jt("KEY_ARROW_LEFT_COMMAND"),
      he = Jt("MOVE_TO_START"),
      ge = Jt("KEY_ARROW_UP_COMMAND"),
      _e = Jt("KEY_ARROW_DOWN_COMMAND"),
      pe = Jt("KEY_ENTER_COMMAND"),
      ye = Jt("KEY_SPACE_COMMAND"),
      me = Jt("KEY_BACKSPACE_COMMAND"),
      xe = Jt("KEY_ESCAPE_COMMAND"),
      Ce = Jt("KEY_DELETE_COMMAND"),
      Se = Jt("KEY_TAB_COMMAND"),
      Ne = Jt("INSERT_TAB_COMMAND"),
      Te = Jt("INDENT_CONTENT_COMMAND"),
      ve = Jt("OUTDENT_CONTENT_COMMAND"),
      ke = Jt("DROP_COMMAND"),
      Ee = Jt("FORMAT_ELEMENT_COMMAND"),
      Oe = Jt("DRAGSTART_COMMAND"),
      Me = Jt("DRAGOVER_COMMAND"),
      be = Jt("DRAGEND_COMMAND"),
      Ae = Jt("COPY_COMMAND"),
      we = Jt("CUT_COMMAND"),
      De = Jt("SELECT_ALL_COMMAND"),
      Pe = Jt("CLEAR_EDITOR_COMMAND"),
      Ie = Jt("CLEAR_HISTORY_COMMAND"),
      Fe = Jt("CAN_REDO_COMMAND"),
      Le = Jt("CAN_UNDO_COMMAND"),
      Re = Jt("FOCUS_COMMAND"),
      Ke = Jt("BLUR_COMMAND"),
      Be = Jt("KEY_MODIFIER_COMMAND"),
      ze = Object.freeze({}),
      We = [
        [
          "keydown",
          function (t, e) {
            if ((($e = t.timeStamp), (Ue = t.key), e.isComposing())) return;
            wi(e, ce, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = t.target,
              r = t.pointerType;
            Xi(n) &&
              "touch" !== r &&
              "pen" !== r &&
              0 === t.button &&
              lo(e, function () {
                Bo(n) || (Ge = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            wi(e, qt, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            i
              ? (Xe = !0)
              : l || (!c && !d)
                ? wi(e, Xt, t)
                : ((Qe = !0), (Ze = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            (t.stopPropagation(),
              lo(
                e,
                function () {
                  e.dispatchCommand(Gt, t);
                },
                { event: t },
              ),
              (Ye = null));
          },
        ],
        [
          "click",
          function (t, e) {
            lo(e, function () {
              var n = Er(),
                r = Vi(Bi(e)),
                o = Or();
              if (r)
                if (ur(n)) {
                  var _e23 = n.anchor,
                    _i5 = _e23.getNode();
                  if (
                    "element" === _e23.type &&
                    0 === _e23.offset &&
                    n.isCollapsed() &&
                    !yo(_i5) &&
                    1 === ai().getChildrenSize() &&
                    _i5.getTopLevelElementOrThrow().isEmpty() &&
                    null !== o &&
                    n.is(o)
                  )
                    (r.removeAllRanges(), (n.dirty = !0));
                  else if (3 === t.detail && !n.isCollapsed()) {
                    if (_i5 !== n.focus.getNode()) {
                      var _t26 = fs(_i5, function (t) {
                        return fo(t) && !t.isInline();
                      });
                      fo(_t26) && _t26.select(0);
                    }
                  }
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n17 = r.anchorNode;
                  if (qi(_n17) || Ho(_n17)) {
                    ui(kr(o, r, e, t));
                  }
                }
              wi(e, Ht, t);
            });
          },
        ],
        ["cut", ze],
        ["copy", ze],
        ["dragstart", ze],
        ["dragover", ze],
        ["dragend", ze],
        ["paste", ze],
        ["focus", ze],
        ["blur", ze],
        ["drop", ze],
      ];
    s &&
      We.push([
        "beforeinput",
        function (t, e) {
          return (function (t, e) {
            var n = t.inputType;
            if ("deleteCompositionText" === n || (i && Ai(e))) return;
            if ("insertCompositionText" === n) return;
            wi(e, Vt, t);
          })(t, e);
        },
      ]);
    var $e = 0,
      Ue = null,
      Je = 0,
      Ye = null;
    var je = new WeakMap(),
      He = new WeakMap();
    var Ve = !1,
      Ge = !1,
      qe = !1,
      Xe = !1,
      Qe = !1,
      Ze = "",
      tn = null,
      en = [0, "", 0, "root", 0];
    function nn(t, e, n, r, o) {
      var i = t.anchor,
        l = t.focus,
        a = i.getNode(),
        c = Vr(),
        u = Vi(Bi(c)),
        f = null !== u ? u.anchorNode : null,
        d = i.key,
        h = c.getElementByKey(d),
        g = n.length;
      return (
        d !== l.key ||
        !tr(a) ||
        (((!o && (!s || Je < r + 50)) || (a.isDirty() && g < 2) || di(n)) &&
          i.offset !== l.offset &&
          !a.isComposing()) ||
        jo(a) ||
        (a.isDirty() && g > 1) ||
        ((o || !s) && null !== h && !a.isComposing() && f !== Go(h)) ||
        (null !== u &&
          null !== e &&
          (!e.collapsed ||
            e.startContainer !== u.anchorNode ||
            e.startOffset !== u.anchorOffset)) ||
        (!a.isComposing() &&
          (a.getFormat() !== t.format || a.getStyle() !== t.style)) ||
        (function (t, e) {
          if (e.isSegmented()) return !0;
          if (!t.isCollapsed()) return !1;
          var n = t.anchor.offset,
            r = e.getParentOrThrow(),
            o = Yo(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!r.canInsertTextBefore() && !e.isComposing()) ||
                o ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (tr(e) || (fo(e) && e.isInline())) &&
                    !e.canInsertTextAfter()
                  );
                })(e)
            : n === e.getTextContentSize() &&
                (!e.canInsertTextAfter() ||
                  (!r.canInsertTextAfter() && !e.isComposing()) ||
                  o);
        })(t, a)
      );
    }
    function rn(t, e) {
      return (
        Ho(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function on(e, n, r) {
      var o = e.anchorNode,
        i = e.anchorOffset,
        s = e.focusNode,
        l = e.focusOffset;
      (Ve && ((Ve = !1), rn(o, i) && rn(s, l) && !tn)) ||
        lo(n, function () {
          if (!r) return void ui(null);
          if (!Wo(n, o, s)) return;
          var a = Er();
          if (tn && ur(a) && a.isCollapsed()) {
            var _t27 = a.anchor,
              _e24 = tn.anchor;
            ((_t27.key === _e24.key && _t27.offset === _e24.offset + 1) ||
              (1 === _t27.offset &&
                _e24.getNode().is(_t27.getNode().getPreviousSibling()))) &&
              ((a = tn.clone()), ui(a));
          }
          if (((tn = null), ur(a))) {
            var _r13 = a.anchor,
              _o12 = _r13.getNode();
            if (a.isCollapsed()) {
              "Range" === e.type &&
                e.anchorNode === e.focusNode &&
                (a.dirty = !0);
              var _i6 = Bi(n).event,
                _s3 = _i6 ? _i6.timeStamp : performance.now(),
                _en = en,
                _l2 = _en[0],
                _c = _en[1],
                _u = _en[2],
                _f = _en[3],
                _d2 = _en[4],
                _h2 = ai(),
                _g2 = !1 === n.isComposing() && "" === _h2.getTextContent();
              if (_s3 < _d2 + 200 && _r13.offset === _u && _r13.key === _f)
                sn(a, _l2, _c);
              else if ("text" === _r13.type) (tr(_o12) || t(141), ln(a, _o12));
              else if ("element" === _r13.type && !_g2) {
                fo(_o12) || t(259);
                var _e25 = _r13.getNode();
                _e25.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        r = e.getTextStyle();
                      sn(t, n, r);
                    })(a, _e25)
                  : sn(a, a.format, "");
              }
            } else {
              var _t28 = _r13.key,
                _e26 = a.focus.key,
                _n18 = a.getNodes(),
                _o13 = _n18.length,
                _s4 = a.isBackward(),
                _c2 = _s4 ? l : i,
                _u2 = _s4 ? i : l,
                _f2 = _s4 ? _e26 : _t28,
                _d3 = _s4 ? _t28 : _e26;
              var _h3 = 2047,
                _g3 = !1;
              for (var _t29 = 0; _t29 < _o13; _t29++) {
                var _e27 = _n18[_t29],
                  _r14 = _e27.getTextContentSize();
                if (
                  tr(_e27) &&
                  0 !== _r14 &&
                  !(
                    (0 === _t29 && _e27.__key === _f2 && _c2 === _r14) ||
                    (_t29 === _o13 - 1 && _e27.__key === _d3 && 0 === _u2)
                  ) &&
                  ((_g3 = !0), (_h3 &= _e27.getFormat()), 0 === _h3)
                )
                  break;
              }
              a.format = _g3 ? _h3 : 0;
            }
          }
          wi(n, Yt, void 0);
        });
    }
    function sn(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function ln(t, e) {
      sn(t, e.getFormat(), e.getStyle());
    }
    function an(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function cn(e) {
      var n = e.inputType,
        r = an(e),
        o = Vr(),
        i = Er();
      if ("deleteContentBackward" === n) {
        if (null === i) {
          var _t30 = Or();
          if (!ur(_t30)) return !0;
          ui(_t30.clone());
        }
        if (ur(i)) {
          var _n19 = i.anchor.key === i.focus.key;
          if (
            ((s = e.timeStamp),
            "MediaLast" === Ue && s < $e + 30 && o.isComposing() && _n19)
          ) {
            if (
              (ti(null),
              ($e = 0),
              setTimeout(function () {
                lo(o, function () {
                  ti(null);
                });
              }, 30),
              ur(i))
            ) {
              var _e28 = i.anchor.getNode();
              (_e28.markDirty(), tr(_e28) || t(142), ln(i, _e28));
            }
          } else {
            (ti(null), e.preventDefault());
            var _t31 = i.anchor.getNode(),
              _r15 = _t31.getTextContent(),
              _s5 = _t31.canInsertTextAfter(),
              _l3 = 0 === i.anchor.offset && i.focus.offset === _r15.length;
            var _a2 = f && _n19 && !_l3 && _s5;
            if (
              (_a2 && i.isCollapsed() && (_a2 = !_o(bi(i.anchor, !0))), !_a2)
            ) {
              wi(o, Qt, !0);
              var _t32 = Er();
              f &&
                ur(_t32) &&
                _t32.isCollapsed() &&
                ((tn = _t32),
                setTimeout(function () {
                  return (tn = null);
                }));
            }
          }
          return !0;
        }
      }
      var s;
      if (!ur(i)) return !0;
      var a = e.data;
      (null !== Ye && pi(!1, o, Ye),
        (i.dirty && null === Ye) ||
          !i.isCollapsed() ||
          yo(i.anchor.getNode()) ||
          null === r ||
          i.applyDOMRange(r),
        (Ye = null));
      var c = i.anchor,
        u = i.focus,
        d = c.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === a) (e.preventDefault(), wi(o, Zt, !1));
        else if (a === v) (e.preventDefault(), wi(o, te, void 0));
        else if (null == a && e.dataTransfer) {
          var _t33 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), i.insertRawText(_t33));
        } else
          null != a && nn(i, r, a, e.timeStamp, !0)
            ? (e.preventDefault(), wi(o, ee, a))
            : (Ye = a);
        return ((Je = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          wi(o, ee, e);
          break;
        case "insertFromComposition":
          (ti(null), wi(o, ee, e));
          break;
        case "insertLineBreak":
          (ti(null), wi(o, Zt, !1));
          break;
        case "insertParagraph":
          (ti(null), qe && !l ? ((qe = !1), wi(o, Zt, !1)) : wi(o, te, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          wi(o, ne, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || fo(t) || fo(e) || !Yo(t) || !Yo(e);
          })(d, h) && wi(o, re, e);
          break;
        case "deleteByDrag":
        case "deleteByCut":
          wi(o, re, e);
          break;
        case "deleteContent":
          wi(o, Qt, !1);
          break;
        case "deleteWordBackward":
          wi(o, oe, !0);
          break;
        case "deleteWordForward":
          wi(o, oe, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          wi(o, ie, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          wi(o, ie, !1);
          break;
        case "formatStrikeThrough":
          wi(o, se, "strikethrough");
          break;
        case "formatBold":
          wi(o, se, "bold");
          break;
        case "formatItalic":
          wi(o, se, "italic");
          break;
        case "formatUnderline":
          wi(o, se, "underline");
          break;
        case "historyUndo":
          wi(o, le, void 0);
          break;
        case "historyRedo":
          wi(o, ae, void 0);
      }
      return !0;
    }
    function un(t) {
      if (qi(t.target) && Bo(t.target)) return !0;
      var e = Vr(),
        n = Er(),
        r = t.data,
        o = an(t);
      if (null != r && ur(n) && nn(n, o, r, t.timeStamp, !1)) {
        Xe && (hn(e, r), (Xe = !1));
        var _o14 = n.anchor.getNode(),
          _l4 = Vi(Bi(e));
        if (null === _l4) return !0;
        var _a3 = n.isBackward(),
          _c3 = _a3 ? n.anchor.offset : n.focus.offset,
          _u3 = _a3 ? n.focus.offset : n.anchor.offset;
        (s &&
          !n.isCollapsed() &&
          tr(_o14) &&
          null !== _l4.anchorNode &&
          _o14.getTextContent().slice(0, _c3) +
            r +
            _o14.getTextContent().slice(_c3 + _u3) ===
            _i(_l4.anchorNode)) ||
          wi(e, ee, r);
        var _d4 = r.length;
        (i &&
          _d4 > 1 &&
          "insertCompositionText" === t.inputType &&
          !e.isComposing() &&
          (n.anchor.offset -= _d4),
          f && e.isComposing() && (($e = 0), ti(null)));
      } else {
        (pi(!1, e, null !== r ? r : void 0),
          Xe && (hn(e, r || void 0), (Xe = !1)));
      }
      return (
        (function () {
          Yr();
          var t = Vr();
          j(t);
        })(),
        !0
      );
    }
    function fn(t) {
      var e = Vr(),
        n = Er();
      if (ur(n) && !e.isComposing()) {
        var _r16 = n.anchor,
          _o15 = n.anchor.getNode();
        (ti(_r16.key),
          Fi(wn),
          (t.timeStamp < $e + 30 ||
            "element" === _r16.type ||
            !n.isCollapsed() ||
            _o15.getFormat() !== n.format ||
            (tr(_o15) && _o15.getStyle() !== n.style)) &&
            wi(e, ee, k));
      }
      return !0;
    }
    function dn(t) {
      return (hn(Vr(), t.data), Fi(Dn), !0);
    }
    function hn(t, e) {
      var n = t._compositionKey;
      if ((ti(null), null !== n && null != e)) {
        if ("" === e) {
          var _e29 = ni(n),
            _r17 = Go(t.getElementByKey(n));
          if (null !== _r17 && null !== _r17.nodeValue && tr(_e29)) {
            var _n20 = Vi(Bi(t));
            var _o16 = null,
              _i7 = null;
            (null !== _n20 &&
              _n20.anchorNode === _r17 &&
              ((_o16 = _n20.anchorOffset), (_i7 = _n20.focusOffset)),
              yi(_e29, _r17.nodeValue, _o16, _i7, !0));
          }
          return;
        }
        if ("\n" === e[e.length - 1]) {
          var _e30 = Er();
          if (ur(_e30) || dr(_e30)) {
            if (ur(_e30)) {
              var _t34 = _e30.focus;
              _e30.anchor.set(_t34.key, _t34.offset, _t34.type);
            }
            return void wi(t, pe, null);
          }
        }
      }
      pi(!0, t, e);
    }
    function gn(t) {
      var e = Vr();
      if (null == t.key) return !0;
      if (Qe) {
        if (vi(t))
          return (
            lo(e, function () {
              hn(e, Ze);
            }),
            (Qe = !1),
            (Ze = ""),
            !0
          );
        ((Qe = !1), (Ze = ""));
      }
      if (
        (function (t) {
          return Si(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        wi(e, ue, t);
      else if (
        (function (t) {
          return Si(t, "ArrowRight", Ni);
        })(t)
      )
        wi(e, fe, t);
      else if (
        (function (t) {
          return Si(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        wi(e, de, t);
      else if (
        (function (t) {
          return Si(t, "ArrowLeft", Ni);
        })(t)
      )
        wi(e, he, t);
      else if (
        (function (t) {
          return Si(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        wi(e, ge, t);
      else if (
        (function (t) {
          return Si(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        wi(e, _e, t);
      else if (
        (function (t) {
          return Si(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((qe = !0), wi(e, pe, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        wi(e, ye, t);
      else if (
        (function (t) {
          return o && Si(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (qe = !0), wi(e, Zt, !0));
      else if (
        (function (t) {
          return Si(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((qe = !1), wi(e, pe, t));
      else if (
        (function (t) {
          return (
            Si(t, "Backspace", { shiftKey: "any" }) ||
            (o && Si(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        vi(t) ? wi(e, me, t) : (t.preventDefault(), wi(e, Qt, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        wi(e, xe, t);
      else if (
        (function (t) {
          return Si(t, "Delete", {}) || (o && Si(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), wi(e, Qt, !1))
          : wi(e, Ce, t);
      else if (
        (function (t) {
          return Si(t, "Backspace", Ti);
        })(t)
      )
        (t.preventDefault(), wi(e, oe, !0));
      else if (
        (function (t) {
          return Si(t, "Delete", Ti);
        })(t)
      )
        (t.preventDefault(), wi(e, oe, !1));
      else if (
        (function (t) {
          return o && Si(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), wi(e, ie, !0));
      else if (
        (function (t) {
          return (
            o &&
            (Si(t, "Delete", { metaKey: !0 }) || Si(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), wi(e, ie, !1));
      else if (
        (function (t) {
          return Si(t, "b", Ni);
        })(t)
      )
        (t.preventDefault(), wi(e, se, "bold"));
      else if (
        (function (t) {
          return Si(t, "u", Ni);
        })(t)
      )
        (t.preventDefault(), wi(e, se, "underline"));
      else if (
        (function (t) {
          return Si(t, "i", Ni);
        })(t)
      )
        (t.preventDefault(), wi(e, se, "italic"));
      else if (
        (function (t) {
          return Si(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        wi(e, Se, t);
      else if (
        (function (t) {
          return Si(t, "z", Ni);
        })(t)
      )
        (t.preventDefault(), wi(e, le, void 0));
      else if (
        (function (t) {
          if (o) return Si(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            Si(t, "y", { ctrlKey: !0 }) ||
            Si(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), wi(e, ae, void 0));
      else {
        var _n21 = e._editorState._selection;
        null === _n21 || ur(_n21)
          ? ki(t) && (t.preventDefault(), wi(e, De, t))
          : !(function (t) {
                return Si(t, "c", Ni);
              })(t)
            ? !(function (t) {
                return Si(t, "x", Ni);
              })(t)
              ? ki(t) && (t.preventDefault(), wi(e, De, t))
              : (t.preventDefault(), wi(e, we, t))
            : (t.preventDefault(), wi(e, Ae, t));
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(Be, t),
        !0
      );
    }
    function _n(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var pn = new Map();
    function yn(t) {
      var e = Gi(t.target);
      if (null === e) return;
      var n = Uo(e.anchorNode);
      if (null === n) return;
      Ge &&
        ((Ge = !1),
        lo(n, function () {
          var r = Or(),
            o = e.anchorNode;
          if (qi(o) || Ho(o)) {
            ui(kr(r, e, n, t));
          }
        }));
      var r = hi(n),
        o = r[r.length - 1],
        i = o._key,
        s = pn.get(i),
        l = s || o;
      (l !== n && on(e, l, !1),
        on(e, n, !0),
        n !== o ? pn.set(i, n) : s && pn["delete"](i));
    }
    function mn(t) {
      t._lexicalHandled = !0;
    }
    function xn(t) {
      return !0 === t._lexicalHandled;
    }
    var Cn = function Cn() {};
    function Sn(e) {
      var n = je.get(e);
      if (void 0 === n) return void Cn();
      var r = He.get(n);
      if (void 0 === r) return void Cn();
      var o = r - 1;
      (o >= 0 || t(164),
        je["delete"](e),
        He.set(n, o),
        0 === o && n.removeEventListener("selectionchange", yn));
      var i = Jo(e);
      $o(i)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e31 = hi(t),
                _n22 = _e31[_e31.length - 1]._key;
              pn.get(_n22) === t && pn["delete"](_n22);
            } else pn["delete"](t._key);
          })(i),
          (e.__lexicalEditor = null))
        : i && t(198);
      var s = _n(e);
      for (var _t35 = 0; _t35 < s.length; _t35++) s[_t35]();
      e.__lexicalEventHandles = [];
    }
    function Nn(t, e, n) {
      Yr();
      var r = t.__key,
        o = t.getParent();
      if (null === o) return;
      var i = (function (t) {
        var e = Er();
        if (!ur(e) || !fo(t)) return e;
        var n = e.anchor,
          r = e.focus,
          o = n.getNode(),
          i = r.getNode();
        Ri(o, t) && n.set(t.__key, 0, "element");
        Ri(i, t) && r.set(t.__key, 0, "element");
        return e;
      })(t);
      var s = !1;
      if (ur(i) && e) {
        var _e32 = i.anchor,
          _n23 = i.focus;
        (_e32.key === r &&
          (Ar(_e32, t, o, t.getPreviousSibling(), t.getNextSibling()),
          (s = !0)),
          _n23.key === r &&
            (Ar(_n23, t, o, t.getPreviousSibling(), t.getNextSibling()),
            (s = !0)));
      } else dr(i) && e && t.isSelected() && t.selectPrevious();
      if (ur(i) && e && !s) {
        var _e33 = t.getIndexWithinParent();
        (Qo(t), Mr(i, o, _e33, -1));
      } else Qo(t);
      (n || Wi(o) || o.canBeEmpty() || !o.isEmpty() || Nn(o, e),
        e && i && yo(o) && o.isEmpty() && o.selectEnd());
    }
    var Tn = Symbol["for"]("ephemeral");
    function vn(t) {
      return t[Tn] || !1;
    }
    var _kn5 = (function () {
      function kn(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", {
            configurable: !0,
            enumerable: !1,
            value: void 0,
            writable: !0,
          }),
          Xo(this, t));
      }
      kn.getType = function getType() {
        var _us2 = us(this),
          e = _us2.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      kn.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto2 = kn.prototype;
      _proto2.$config = function $config() {
        return {};
      };
      _proto2.config = function config(t, e) {
        var _ref11;
        var n = e["extends"] || Object.getPrototypeOf(this.constructor);
        return (
          Object.assign(e, { extends: n, type: t }),
          (_ref11 = {}),
          (_ref11[t] = e),
          _ref11
        );
      };
      _proto2.afterCloneFrom = function afterCloneFrom(t) {
        this.__key === t.__key
          ? ((this.__parent = t.__parent),
            (this.__next = t.__next),
            (this.__prev = t.__prev),
            (this.__state = t.__state))
          : t.__state && (this.__state = t.__state.getWritable(this));
      };
      _proto2.resetOnCopyNodeFrom = function resetOnCopyNodeFrom(t) {
        this.__state &&
          (this.__state = this.__state.getWritable(this).resetOnCopyNode());
      };
      _proto2.getType = function getType() {
        return this.__type;
      };
      _proto2.isInline = function isInline() {
        t(137, this.constructor.name);
      };
      _proto2.isAttached = function isAttached() {
        var t = this.__key;
        for (; null !== t; ) {
          if ("root" === t) return !0;
          var _e34 = ni(t);
          if (null === _e34) break;
          t = _e34.__parent;
        }
        return !1;
      };
      _proto2.isSelected = function isSelected(t) {
        var _this12 = this;
        var e = t || Er();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this12.__key;
        });
        if (tr(this)) return n;
        if (
          ur(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t36 = this.getParent();
          if (_o(this) && this.isInline() && _t36) {
            var _n24 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t36.is(_n24.getNode()) &&
              _n24.offset === _t36.getChildrenSize() &&
              this.is(_t36.getLastChild())
            )
              return !1;
          }
        }
        return n;
      };
      _proto2.getKey = function getKey() {
        return this.__key;
      };
      _proto2.getIndexWithinParent = function getIndexWithinParent() {
        var t = this.getParent();
        if (null === t) return -1;
        var e = t.getFirstChild(),
          n = 0;
        for (; null !== e; ) {
          if (this.is(e)) return n;
          (n++, (e = e.getNextSibling()));
        }
        return -1;
      };
      _proto2.getParent = function getParent() {
        var t = this.getLatest().__parent;
        return null === t ? null : ni(t);
      };
      _proto2.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto2.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n25 = e.getParent();
          if (Wi(_n25)) return (fo(e) || (e === this && _o(e)) || t(194), e);
          e = _n25;
        }
        return null;
      };
      _proto2.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
        var e = this.getTopLevelElement();
        return (null === e && t(67, this.__key), e);
      };
      _proto2.getParents = function getParents() {
        var t = [];
        var e = this.getParent();
        for (; null !== e; ) (t.push(e), (e = e.getParent()));
        return t;
      };
      _proto2.getParentKeys = function getParentKeys() {
        var t = [];
        var e = this.getParent();
        for (; null !== e; ) (t.push(e.__key), (e = e.getParent()));
        return t;
      };
      _proto2.getPreviousSibling = function getPreviousSibling() {
        var t = this.getLatest().__prev;
        return null === t ? null : ni(t);
      };
      _proto2.getPreviousSiblings = function getPreviousSiblings() {
        var t = [],
          e = this.getParent();
        if (null === e) return t;
        var n = e.getFirstChild();
        for (; null !== n && !n.is(this); )
          (t.push(n), (n = n.getNextSibling()));
        return t;
      };
      _proto2.getNextSibling = function getNextSibling() {
        var t = this.getLatest().__next;
        return null === t ? null : ni(t);
      };
      _proto2.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto2.getCommonAncestor = function getCommonAncestor(t) {
        var e = fo(this) ? this : this.getParent(),
          n = fo(t) ? t : t.getParent(),
          r = e && n ? Us(e, n) : null;
        return r ? r.commonAncestor : null;
      };
      _proto2.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto2.isBefore = function isBefore(e) {
        var n = Us(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === zs(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto2.isParentOf = function isParentOf(t) {
        var e = Us(this, t);
        return null !== e && "ancestor" === e.type;
      };
      _proto2.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          r = [],
          o = new Set();
        var i = this;
        for (; null !== i; ) {
          var _s6 = i.__key;
          if ((o.has(_s6) || (o.add(_s6), r.push(i)), i === e)) break;
          var _l5 = fo(i) ? (n ? i.getFirstChild() : i.getLastChild()) : null;
          if (null !== _l5) {
            i = _l5;
            continue;
          }
          var _a4 = n ? i.getNextSibling() : i.getPreviousSibling();
          if (null !== _a4) {
            i = _a4;
            continue;
          }
          var _c4 = i.getParentOrThrow();
          if ((o.has(_c4.__key) || r.push(_c4), _c4 === e)) break;
          var _u4 = null,
            _f3 = _c4;
          do {
            if (
              (null === _f3 && t(68),
              (_u4 = n ? _f3.getNextSibling() : _f3.getPreviousSibling()),
              (_f3 = _f3.getParent()),
              null === _f3)
            )
              break;
            null !== _u4 || o.has(_f3.__key) || r.push(_f3);
          } while (null === _u4);
          i = _u4;
        }
        return (n || r.reverse(), r);
      };
      _proto2.isDirty = function isDirty() {
        var t = Vr()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto2.getLatest = function getLatest() {
        if (vn(this)) return this;
        var e = ni(this.__key);
        return (null === e && t(113), e);
      };
      _proto2.getWritable = function getWritable() {
        if (vn(this)) return this;
        Yr();
        var t = Hr(),
          e = Vr(),
          n = t._nodeMap,
          r = this.__key,
          o = this.getLatest(),
          i = e._cloneNotNeeded,
          s = Er();
        if ((null !== s && s.setCachedNodes(null), i.has(r))) return (Zo(o), o);
        var l = ss(o);
        return (i.add(r), Zo(l), n.set(r, l), l);
      };
      _proto2.getTextContent = function getTextContent() {
        return "";
      };
      _proto2.getTextContentSize = function getTextContentSize() {
        return this.getTextContent().length;
      };
      _proto2.createDOM = function createDOM(e, n) {
        t(70);
      };
      _proto2.updateDOM = function updateDOM(e, n, r) {
        t(71);
      };
      _proto2.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto2.exportJSON = function exportJSON() {
        var t = this.__state ? this.__state.toJSON() : void 0;
        return babelHelpers["extends"]({ type: this.__type, version: 1 }, t);
      };
      kn.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto2.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            r = e.$;
          var o = r;
          for (var _t37 of Z(n).flatKeys)
            _t37 in e &&
              ((void 0 !== o && o !== r) ||
                (o = babelHelpers["extends"]({}, r)),
              (o[_t37] = e[_t37]));
          return ((n.__state || o) && Q(t).updateFromJSON(o), n);
        })(this, t);
      };
      kn.transform = function transform() {
        return null;
      };
      _proto2.remove = function remove(t) {
        Nn(this, !0, t);
      };
      _proto2.replace = function replace(e, n) {
        Yr();
        var r = Er();
        (null !== r && (r = r.clone()), Ji(this, e));
        var o = this.getLatest(),
          i = this.__key,
          s = e.__key,
          l = e.getWritable(),
          a = this.getParentOrThrow().getWritable(),
          c = a.__size;
        Qo(l);
        var u = o.getPreviousSibling(),
          f = o.getNextSibling(),
          d = o.__prev,
          h = o.__next,
          g = o.__parent;
        if ((Nn(o, !1, !0), null === u)) a.__first = s;
        else {
          u.getWritable().__next = s;
        }
        if (((l.__prev = d), null === f)) a.__last = s;
        else {
          f.getWritable().__prev = s;
        }
        if (
          ((l.__next = h),
          (l.__parent = g),
          (a.__size = c),
          n &&
            ((fo(this) && fo(l)) || t(139),
            this.getChildren().forEach(function (t) {
              l.append(t);
            })),
          ur(r))
        ) {
          ui(r);
          var _t38 = r.anchor,
            _e35 = r.focus;
          (_t38.key === i && ar(_t38, l), _e35.key === i && ar(_e35, l));
        }
        return (ei() === i && ti(s), l);
      };
      _proto2.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (Yr(), Ji(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          o = r.getParent(),
          i = Er();
        var s = !1,
          l = !1;
        if (null !== o) {
          var _e36 = t.getIndexWithinParent();
          if ((Qo(r), ur(i))) {
            var _t39 = o.__key,
              _n26 = i.anchor,
              _r18 = i.focus;
            ((s =
              "element" === _n26.type &&
              _n26.key === _t39 &&
              _n26.offset === _e36 + 1),
              (l =
                "element" === _r18.type &&
                _r18.key === _t39 &&
                _r18.offset === _e36 + 1));
          }
        }
        var a = this.getNextSibling(),
          c = this.getParentOrThrow().getWritable(),
          u = r.__key,
          f = n.__next;
        if (null === a) c.__last = u;
        else {
          a.getWritable().__prev = u;
        }
        if (
          (c.__size++,
          (n.__next = u),
          (r.__next = f),
          (r.__prev = n.__key),
          (r.__parent = n.__parent),
          e && ur(i))
        ) {
          var _t40 = this.getIndexWithinParent();
          Mr(i, c, _t40 + 1);
          var _e37 = c.__key;
          (s && i.anchor.set(_e37, _t40 + 2, "element"),
            l && i.focus.set(_e37, _t40 + 2, "element"));
        }
        return t;
      };
      _proto2.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (Yr(), Ji(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          o = r.__key;
        Qo(r);
        var i = this.getPreviousSibling(),
          s = this.getParentOrThrow().getWritable(),
          l = n.__prev,
          a = this.getIndexWithinParent();
        if (null === i) s.__first = o;
        else {
          i.getWritable().__next = o;
        }
        (s.__size++,
          (n.__prev = o),
          (r.__prev = l),
          (r.__next = n.__key),
          (r.__parent = n.__parent));
        var c = Er();
        if (e && ur(c)) {
          Mr(c, this.getParentOrThrow(), a);
        }
        return t;
      };
      _proto2.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto2.createParentElementNode = function createParentElementNode() {
        return ko();
      };
      _proto2.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto2.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto2.selectPrevious = function selectPrevious(t, e) {
        Yr();
        var n = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select(0, 0);
        if (fo(n)) return n.select();
        if (!tr(n)) {
          var _t41 = n.getIndexWithinParent() + 1;
          return r.select(_t41, _t41);
        }
        return n.select(t, e);
      };
      _proto2.selectNext = function selectNext(t, e) {
        Yr();
        var n = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select();
        if (fo(n)) return n.select(0, 0);
        if (!tr(n)) {
          var _t42 = n.getIndexWithinParent();
          return r.select(_t42, _t42);
        }
        return n.select(t, e);
      };
      _proto2.markDirty = function markDirty() {
        this.getWritable();
      };
      _proto2.reconcileObservedMutation = function reconcileObservedMutation(
        t,
        e,
      ) {
        this.markDirty();
      };
      return kn;
    })();
    var En = "history-merge",
      On = "collaboration",
      Mn = "skip-scroll-into-view",
      bn = "skip-dom-selection",
      An = "skip-selection-focus",
      wn = "composition-start",
      Dn = "composition-end";
    var _Pn = (function (_kn) {
      function Pn(t) {
        return _kn.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(Pn, _kn);
      Pn.getType = function getType() {
        return "linebreak";
      };
      Pn.clone = function clone(t) {
        return new Pn(t.__key);
      };
      var _proto3 = Pn.prototype;
      _proto3.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto3.createDOM = function createDOM() {
        return document.createElement("br");
      };
      _proto3.updateDOM = function updateDOM() {
        return !1;
      };
      _proto3.isInline = function isInline() {
        return !0;
      };
      Pn.importDOM = function importDOM() {
        return {
          br: function br(t) {
            return (function (t) {
              var e = t.parentElement;
              if (null !== e && ts(e)) {
                var _n27 = e.firstChild;
                if (_n27 === t || (_n27.nextSibling === t && Rn(_n27))) {
                  var _n28 = e.lastChild;
                  if (_n28 === t || (_n28.previousSibling === t && Rn(_n28)))
                    return !0;
                }
              }
              return !1;
            })(t) ||
              (function (t) {
                var e = t.parentElement;
                if (null !== e && ts(e)) {
                  var _n29 = e.firstChild;
                  if (_n29 === t || (_n29.nextSibling === t && Rn(_n29)))
                    return !1;
                  var _r19 = e.lastChild;
                  if (_r19 === t || (_r19.previousSibling === t && Rn(_r19)))
                    return !0;
                }
                return !1;
              })(t)
              ? null
              : { conversion: In, priority: 0 };
          },
        };
      };
      Pn.importJSON = function importJSON(t) {
        return Fn().updateFromJSON(t);
      };
      return Pn;
    })(_kn5);
    function In(t) {
      return { node: Fn() };
    }
    function Fn() {
      return Ui(new _Pn());
    }
    function Ln(t) {
      return t instanceof _Pn;
    }
    function Rn(t) {
      return Ho(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function Kn(t, e) {
      return 16 & e
        ? "code"
        : e & p
          ? "mark"
          : 32 & e
            ? "sub"
            : 64 & e
              ? "sup"
              : null;
    }
    function Bn(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function zn(t, e, n, r, o) {
      var i = r.classList;
      var s = Ei(o, "base");
      (void 0 !== s && i.add.apply(i, s),
        (s = Ei(o, "underlineStrikethrough")));
      var l = !1;
      var a = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), a || i.add.apply(i, s))
          : a && i.remove.apply(i, s));
      for (var _t43 in A) {
        var _r20 = A[_t43];
        if (((s = Ei(o, _t43)), void 0 !== s))
          if (n & _r20) {
            if (l && ("underline" === _t43 || "strikethrough" === _t43)) {
              e & _r20 && i.remove.apply(i, s);
              continue;
            }
            (0 === (e & _r20) ||
              (a && "underline" === _t43) ||
              "strikethrough" === _t43) &&
              i.add.apply(i, s);
          } else e & _r20 && i.remove.apply(i, s);
      }
    }
    function Wn(t, e, n) {
      var r = e.firstChild,
        o = n.isComposing(),
        s = t + (o ? T : "");
      if (null == r) e.textContent = s;
      else {
        var _t44 = r.nodeValue;
        if (_t44 !== s)
          if (o || i) {
            var _ref12 = (function (t, e) {
                var n = t.length,
                  r = e.length;
                var o = 0,
                  i = 0;
                for (; o < n && o < r && t[o] === e[o]; ) o++;
                for (
                  ;
                  i + o < n && i + o < r && t[n - i - 1] === e[r - i - 1];
                )
                  i++;
                return [o, n - o - i, e.slice(o, r - i)];
              })(_t44, s),
              _e38 = _ref12[0],
              _n30 = _ref12[1],
              _o17 = _ref12[2];
            (0 !== _n30 && r.deleteData(_e38, _n30), r.insertData(_e38, _o17));
          } else r.nodeValue = s;
      }
    }
    function $n(t, e, n, r, o, i) {
      Wn(o, t, e);
      var s = i.theme.text;
      void 0 !== s && zn(0, 0, r, t, s);
    }
    function Un(t, e) {
      var n = document.createElement(e);
      return (n.appendChild(t), n);
    }
    var _Jn2 = (function (_kn2) {
      function Jn(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _kn2.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(Jn, _kn2);
      Jn.getType = function getType() {
        return "text";
      };
      Jn.clone = function clone(t) {
        return new Jn(t.__text, t.__key);
      };
      var _proto4 = Jn.prototype;
      _proto4.afterCloneFrom = function afterCloneFrom(t) {
        (_kn2.prototype.afterCloneFrom.call(this, t),
          (this.__text = t.__text),
          (this.__format = t.__format),
          (this.__style = t.__style),
          (this.__mode = t.__mode),
          (this.__detail = t.__detail));
      };
      _proto4.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto4.getDetail = function getDetail() {
        return this.getLatest().__detail;
      };
      _proto4.getMode = function getMode() {
        var t = this.getLatest();
        return F[t.__mode];
      };
      _proto4.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto4.isToken = function isToken() {
        return 1 === this.getLatest().__mode;
      };
      _proto4.isComposing = function isComposing() {
        return this.__key === ei();
      };
      _proto4.isSegmented = function isSegmented() {
        return 2 === this.getLatest().__mode;
      };
      _proto4.isDirectionless = function isDirectionless() {
        return !!(1 & this.getLatest().__detail);
      };
      _proto4.isUnmergeable = function isUnmergeable() {
        return !!(2 & this.getLatest().__detail);
      };
      _proto4.hasFormat = function hasFormat(t) {
        var e = A[t];
        return 0 !== (this.getFormat() & e);
      };
      _proto4.isSimpleText = function isSimpleText() {
        return "text" === this.__type && 0 === this.__mode;
      };
      _proto4.getTextContent = function getTextContent() {
        return this.getLatest().__text;
      };
      _proto4.getFormatFlags = function getFormatFlags(t, e) {
        return qo(this.getLatest().__format, t, e);
      };
      _proto4.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto4.isInline = function isInline() {
        return !0;
      };
      _proto4.createDOM = function createDOM(t, e) {
        var n = this.__format,
          r = Kn(0, n),
          o = Bn(0, n),
          i = null === r ? o : r,
          s = document.createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== r && ((l = document.createElement(o)), s.appendChild(l)));
        $n(l, this, 0, n, this.__text, t);
        var a = this.__style;
        return ("" !== a && (s.style.cssText = a), s);
      };
      _proto4.updateDOM = function updateDOM(e, n, r) {
        var o = this.__text,
          i = e.__format,
          s = this.__format,
          l = Kn(0, i),
          a = Kn(0, s),
          c = Bn(0, i),
          u = Bn(0, s);
        if ((null === l ? c : l) !== (null === a ? u : a)) return !0;
        if (l === a && c !== u) {
          var _e39 = n.firstChild;
          null == _e39 && t(48);
          var _i8 = document.createElement(u);
          return ($n(_i8, this, 0, s, o, r), n.replaceChild(_i8, _e39), !1);
        }
        var f = n;
        (null !== a && null !== l && ((f = n.firstChild), null == f && t(49)),
          Wn(o, f, this));
        var d = r.theme.text;
        void 0 !== d && i !== s && zn(0, i, s, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && (n.style.cssText = g), !1);
      };
      Jn.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: Gn, priority: 0 };
          },
          b: function b() {
            return { conversion: jn, priority: 0 };
          },
          code: function code() {
            return { conversion: Qn, priority: 0 };
          },
          em: function em() {
            return { conversion: Qn, priority: 0 };
          },
          i: function i() {
            return { conversion: Qn, priority: 0 };
          },
          mark: function mark() {
            return { conversion: Qn, priority: 0 };
          },
          s: function s() {
            return { conversion: Qn, priority: 0 };
          },
          span: function span() {
            return { conversion: Yn, priority: 0 };
          },
          strong: function strong() {
            return { conversion: Qn, priority: 0 };
          },
          sub: function sub() {
            return { conversion: Qn, priority: 0 };
          },
          sup: function sup() {
            return { conversion: Qn, priority: 0 };
          },
          u: function u() {
            return { conversion: Qn, priority: 0 };
          },
        };
      };
      Jn.importJSON = function importJSON(t) {
        return Zn().updateFromJSON(t);
      };
      _proto4.updateFromJSON = function updateFromJSON(t) {
        return _kn2.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto4.exportDOM = function exportDOM(e) {
        var _kn2$prototype$export = _kn2.prototype.exportDOM.call(this, e),
          n = _kn2$prototype$export.element;
        return (
          qi(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = Un(n, "b")),
          this.hasFormat("italic") && (n = Un(n, "i")),
          this.hasFormat("strikethrough") && (n = Un(n, "s")),
          this.hasFormat("underline") && (n = Un(n, "u")),
          { element: n }
        );
      };
      _proto4.exportJSON = function exportJSON() {
        return babelHelpers["extends"](
          {
            detail: this.getDetail(),
            format: this.getFormat(),
            mode: this.getMode(),
            style: this.getStyle(),
            text: this.getTextContent(),
          },
          _kn2.prototype.exportJSON.call(this),
        );
      };
      _proto4.selectionTransform = function selectionTransform(t, e) {};
      _proto4.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = "string" == typeof t ? A[t] : t), e);
      };
      _proto4.setDetail = function setDetail(t) {
        var e = this.getWritable();
        return ((e.__detail = "string" == typeof t ? w[t] : t), e);
      };
      _proto4.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t), e);
      };
      _proto4.toggleFormat = function toggleFormat(t) {
        var e = qo(this.getFormat(), t, null);
        return this.setFormat(e);
      };
      _proto4.toggleDirectionless = function toggleDirectionless() {
        var t = this.getWritable();
        return ((t.__detail ^= 1), t);
      };
      _proto4.toggleUnmergeable = function toggleUnmergeable() {
        var t = this.getWritable();
        return ((t.__detail ^= 2), t);
      };
      _proto4.setMode = function setMode(t) {
        var e = I[t];
        if (this.__mode === e) return this;
        var n = this.getWritable();
        return ((n.__mode = e), n);
      };
      _proto4.setTextContent = function setTextContent(t) {
        if (this.__text === t) return this;
        var e = this.getWritable();
        return ((e.__text = t), e);
      };
      _proto4.select = function select(t, e) {
        Yr();
        var n = t,
          r = e;
        var o = Er(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t45 = i.length;
          (void 0 === n && (n = _t45), void 0 === r && (r = _t45));
        } else ((n = 0), (r = 0));
        if (!ur(o)) return Nr(s, n, s, r, "text", "text");
        {
          var _t46 = ei();
          ((_t46 !== o.anchor.key && _t46 !== o.focus.key) || ti(s),
            o.setTextNodeRange(this, n, this, r));
        }
        return o;
      };
      _proto4.selectStart = function selectStart() {
        return this.select(0, 0);
      };
      _proto4.selectEnd = function selectEnd() {
        var t = this.getTextContentSize();
        return this.select(t, t);
      };
      _proto4.spliceText = function spliceText(t, e, n, r) {
        var o = this.getWritable(),
          i = o.__text,
          s = n.length;
        var l = t;
        l < 0 && ((l = s + l), l < 0 && (l = 0));
        var a = Er();
        if (r && ur(a)) {
          var _e40 = t + s;
          a.setTextNodeRange(o, _e40, o, _e40);
        }
        var c = i.slice(0, l) + n + i.slice(l + e);
        return ((o.__text = c), o);
      };
      _proto4.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto4.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto4.splitText = function splitText() {
        Yr();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var r = e.__key,
          o = ei(),
          i = n.length;
        for (
          var _len3 = arguments.length, t = new Array(_len3), _key3 = 0;
          _key3 < _len3;
          _key3++
        ) {
          t[_key3] = arguments[_key3];
        }
        (t.sort(function (t, e) {
          return t - e;
        }),
          t.push(i));
        var s = [],
          l = t.length;
        for (var _e41 = 0, _r21 = 0; _e41 < i && _r21 <= l; _r21++) {
          var _o18 = t[_r21];
          _o18 > _e41 && (s.push(n.slice(_e41, _o18)), (_e41 = _o18));
        }
        var a = s.length;
        if (1 === a) return [e];
        var c = s[0],
          u = e.getParent();
        var f;
        var d = e.getFormat(),
          h = e.getStyle(),
          g = e.__detail;
        var _ = !1,
          p = null,
          y = null;
        var m = Er();
        if (ur(m)) {
          var _ref13 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t47 = _ref13[0],
            _e42 = _ref13[1];
          ("text" === _t47.type && _t47.key === r && (p = _t47),
            "text" === _e42.type && _e42.key === r && (y = _e42));
        }
        e.isSegmented()
          ? ((f = Zn(c)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = ot(e, f)),
            (_ = !0))
          : (f = e.setTextContent(c));
        var x = [f];
        for (var _t48 = 1; _t48 < a; _t48++) {
          var _n31 = Zn(s[_t48]);
          ((_n31.__format = d),
            (_n31.__style = h),
            (_n31.__detail = g),
            (_n31.__state = ot(e, _n31)));
          var _i9 = _n31.__key;
          (o === r && ti(_i9), x.push(_n31));
        }
        var C = p ? p.offset : null,
          S = y ? y.offset : null;
        var N = 0;
        for (var _t49 of x) {
          if (!p && !y) break;
          var _e43 = N + _t49.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e43 &&
              C >= N &&
              (p.set(_t49.getKey(), C - N, "text"), C < _e43 && (p = null)),
            null !== y && null !== S && S <= _e43 && S >= N)
          ) {
            y.set(_t49.getKey(), S - N, "text");
            break;
          }
          N = _e43;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && Zo(e);
            null !== n && Zo(n);
          })(this);
          var _t50 = u.getWritable(),
            _e44 = this.getIndexWithinParent();
          (_
            ? (_t50.splice(_e44, 0, x), this.remove())
            : _t50.splice(_e44, 1, x),
            ur(m) && Mr(m, u, _e44, a - 1));
        }
        return x;
      };
      _proto4.mergeWithSibling = function mergeWithSibling(e) {
        var n = e === this.getPreviousSibling();
        n || e === this.getNextSibling() || t(50);
        var r = this.__key,
          o = e.__key,
          i = this.__text,
          s = i.length;
        ei() === o && ti(r);
        var l = Er();
        if (ur(l)) {
          var _t51 = l.anchor,
            _i0 = l.focus;
          (null !== _t51 && _t51.key === o && wr(_t51, n, r, e, s),
            null !== _i0 && _i0.key === o && wr(_i0, n, r, e, s));
        }
        var a = e.__text,
          c = n ? a + i : i + a;
        this.setTextContent(c);
        var u = this.getWritable();
        return (e.remove(), u);
      };
      _proto4.isTextEntity = function isTextEntity() {
        return !1;
      };
      return Jn;
    })(_kn5);
    function Yn(t) {
      return { forChild: er(t.style), node: null };
    }
    function jn(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: er(e.style, n ? void 0 : "bold"), node: null };
    }
    var Hn = new WeakMap();
    function Vn(t) {
      if (!qi(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function Gn(e) {
      var n = e;
      null === e.parentElement && t(129);
      var r = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var r = [t];
          for (; null !== n && void 0 === (e = Hn.get(n)) && !Vn(n); )
            (r.push(n), (n = n.parentNode));
          var o = void 0 === e ? n : e;
          for (var _t52 = 0; _t52 < r.length; _t52++) Hn.set(r[_t52], o);
          return o;
        })(n)
      ) {
        var _t53 = r.split(/(\r?\n|\t)/),
          _e45 = [],
          _n32 = _t53.length;
        for (var _r22 = 0; _r22 < _n32; _r22++) {
          var _n33 = _t53[_r22];
          "\n" === _n33 || "\r\n" === _n33
            ? _e45.push(Fn())
            : "\t" === _n33
              ? _e45.push(rr())
              : "" !== _n33 && _e45.push(Zn(_n33));
        }
        return { node: _e45 };
      }
      if (((r = r.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === r))
        return { node: null };
      if (" " === r[0]) {
        var _t54 = n,
          _e46 = !0;
        for (; null !== _t54 && null !== (_t54 = qn(_t54, !1)); ) {
          var _n34 = _t54.textContent || "";
          if (_n34.length > 0) {
            (/[ \t\n]$/.test(_n34) && (r = r.slice(1)), (_e46 = !1));
            break;
          }
        }
        _e46 && (r = r.slice(1));
      }
      if (" " === r[r.length - 1]) {
        var _t55 = n,
          _e47 = !0;
        for (; null !== _t55 && null !== (_t55 = qn(_t55, !0)); ) {
          if (
            (_t55.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e47 = !1;
            break;
          }
        }
        _e47 && (r = r.slice(0, r.length - 1));
      }
      return "" === r ? { node: null } : { node: Zn(r) };
    }
    function qn(t, e) {
      var n = t;
      for (;;) {
        var _t56 = void 0;
        for (; null === (_t56 = e ? n.nextSibling : n.previousSibling); ) {
          var _t57 = n.parentElement;
          if (null === _t57) return null;
          n = _t57;
        }
        if (((n = _t56), qi(n))) {
          var _t58 = n.style.display;
          if (
            ("" === _t58 && !Zi(n)) ||
            ("" !== _t58 && !_t58.startsWith("inline"))
          )
            return null;
        }
        var _r23 = n;
        for (; null !== (_r23 = e ? n.firstChild : n.lastChild); ) n = _r23;
        if (Ho(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Xn = {
      code: "code",
      em: "italic",
      i: "italic",
      mark: "highlight",
      s: "strikethrough",
      strong: "bold",
      sub: "subscript",
      sup: "superscript",
      u: "underline",
    };
    function Qn(t) {
      var e = Xn[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: er(t.style, e), node: null };
    }
    function Zn(t) {
      if (t === void 0) {
        t = "";
      }
      return Ui(new _Jn2(t));
    }
    function tr(t) {
      return t instanceof _Jn2;
    }
    function er(t, e) {
      var n = t.fontWeight,
        r = t.textDecoration.split(" "),
        o = "700" === n || "bold" === n,
        i = r.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = r.includes("underline"),
        a = t.verticalAlign;
      return function (t) {
        return tr(t)
          ? (o && !t.hasFormat("bold") && t.toggleFormat("bold"),
            i &&
              !t.hasFormat("strikethrough") &&
              t.toggleFormat("strikethrough"),
            s && !t.hasFormat("italic") && t.toggleFormat("italic"),
            l && !t.hasFormat("underline") && t.toggleFormat("underline"),
            "sub" !== a ||
              t.hasFormat("subscript") ||
              t.toggleFormat("subscript"),
            "super" !== a ||
              t.hasFormat("superscript") ||
              t.toggleFormat("superscript"),
            e && !t.hasFormat(e) && t.toggleFormat(e),
            t)
          : t;
      };
    }
    var _nr = (function (_Jn) {
      function nr(t) {
        var _this2;
        ((_this2 = _Jn.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(nr, _Jn);
      nr.getType = function getType() {
        return "tab";
      };
      nr.clone = function clone(t) {
        return new nr(t.__key);
      };
      nr.importDOM = function importDOM() {
        return null;
      };
      var _proto5 = nr.prototype;
      _proto5.createDOM = function createDOM(t) {
        var e = _Jn.prototype.createDOM.call(this, t),
          n = Ei(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      nr.importJSON = function importJSON(t) {
        return rr().updateFromJSON(t);
      };
      _proto5.setTextContent = function setTextContent(t) {
        return (
          "\t" !== t && "" !== t && e(126),
          _Jn.prototype.setTextContent.call(this, "\t")
        );
      };
      _proto5.spliceText = function spliceText(e, n, r, o) {
        return (
          ("" === r && 0 === n) || ("\t" === r && 1 === n) || t(286),
          this
        );
      };
      _proto5.setDetail = function setDetail(e) {
        return (2 !== e && t(127), this);
      };
      _proto5.setMode = function setMode(e) {
        return ("normal" !== e && t(128), this);
      };
      _proto5.canInsertTextBefore = function canInsertTextBefore() {
        return !1;
      };
      _proto5.canInsertTextAfter = function canInsertTextAfter() {
        return !1;
      };
      return nr;
    })(_Jn2);
    function rr() {
      return Ui(new _nr());
    }
    function or(t) {
      return t instanceof _nr;
    }
    var _ir = (function () {
      function ir(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto6 = ir.prototype;
      _proto6.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto6.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return Bs(Zs(Js(this, "next")), Zs(Js(t, "next"))) < 0;
      };
      _proto6.getNode = function getNode() {
        var e = ni(this.key);
        return (null === e && t(20), e);
      };
      _proto6.set = function set(t, e, n, r) {
        var o = this._selection,
          i = this.key;
        (r && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          Jr() ||
            (ei() === i && ti(t),
            null !== o && (o.setCachedNodes(null), (o.dirty = !0))));
      };
      return ir;
    })();
    function sr(t, e, n) {
      return new _ir(t, e, n);
    }
    function lr(t, e) {
      var n = e.__key,
        r = t.offset,
        o = "element";
      if (tr(e)) {
        o = "text";
        var _t59 = e.getTextContentSize();
        r > _t59 && (r = _t59);
      } else if (!fo(e)) {
        var _t60 = e.getNextSibling();
        if (tr(_t60)) ((n = _t60.__key), (r = 0), (o = "text"));
        else {
          var _t61 = e.getParent();
          _t61 && ((n = _t61.__key), (r = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, r, o);
    }
    function ar(t, e) {
      if (fo(e)) {
        var _n35 = e.getLastDescendant();
        fo(_n35) || tr(_n35) ? lr(t, _n35) : lr(t, e);
      } else lr(t, e);
    }
    var _cr = (function () {
      function cr(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto7 = cr.prototype;
      _proto7.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto7.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto7.is = function is(t) {
        if (!dr(t)) return !1;
        var e = this._nodes,
          n = t._nodes;
        return (
          e.size === n.size &&
          Array.from(e).every(function (t) {
            return n.has(t);
          })
        );
      };
      _proto7.isCollapsed = function isCollapsed() {
        return !1;
      };
      _proto7.isBackward = function isBackward() {
        return !1;
      };
      _proto7.getStartEndPoints = function getStartEndPoints() {
        return null;
      };
      _proto7.add = function add(t) {
        ((this.dirty = !0), this._nodes.add(t), (this._cachedNodes = null));
      };
      _proto7["delete"] = function _delete(t) {
        ((this.dirty = !0),
          this._nodes["delete"](t),
          (this._cachedNodes = null));
      };
      _proto7.clear = function clear() {
        ((this.dirty = !0), this._nodes.clear(), (this._cachedNodes = null));
      };
      _proto7.has = function has(t) {
        return this._nodes.has(t);
      };
      _proto7.clone = function clone() {
        return new cr(new Set(this._nodes));
      };
      _proto7.extract = function extract() {
        return this.getNodes();
      };
      _proto7.insertRawText = function insertRawText(t) {};
      _proto7.insertText = function insertText() {};
      _proto7.insertNodes = function insertNodes(t) {
        var e = this.getNodes(),
          n = e.length,
          r = e[n - 1];
        var o;
        if (tr(r)) o = r.select();
        else {
          var _t62 = r.getIndexWithinParent() + 1;
          o = r.getParentOrThrow().select(_t62, _t62);
        }
        o.insertNodes(t);
        for (var _t63 = 0; _t63 < n; _t63++) e[_t63].remove();
      };
      _proto7.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t64 of e) {
          var _e48 = ni(_t64);
          null !== _e48 && n.push(_e48);
        }
        return (Jr() || (this._cachedNodes = n), n);
      };
      _proto7.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n36 = 0; _n36 < t.length; _n36++)
          e += t[_n36].getTextContent();
        return e;
      };
      _proto7.deleteNodes = function deleteNodes() {
        var t = this.getNodes();
        if ((Er() || Or()) === this && t[0]) {
          var _e49 = Es(t[0], "next");
          js(Rs(_e49, _e49));
        }
        for (var _e50 of t) _e50.remove();
      };
      return cr;
    })();
    function ur(t) {
      return t instanceof _fr;
    }
    var _fr = (function () {
      function fr(t, e, n, r) {
        ((this.anchor = t),
          (this.focus = e),
          (t._selection = this),
          (e._selection = this),
          (this._cachedNodes = null),
          (this.format = n),
          (this.style = r),
          (this.dirty = !1));
      }
      var _proto8 = fr.prototype;
      _proto8.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto8.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto8.is = function is(t) {
        return (
          !!ur(t) &&
          this.anchor.is(t.anchor) &&
          this.focus.is(t.focus) &&
          this.format === t.format &&
          this.style === t.style
        );
      };
      _proto8.isCollapsed = function isCollapsed() {
        return this.anchor.is(this.focus);
      };
      _proto8.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = (function (t) {
          var e = [],
            _t$getTextSlices = t.getTextSlices(),
            n = _t$getTextSlices[0],
            r = _t$getTextSlices[1];
          n && e.push(n.caret.origin);
          var o = new Set(),
            i = new Set();
          for (var _n37 of t)
            if (Ns(_n37)) {
              var _t65 = _n37.origin;
              0 === e.length ? o.add(_t65) : (i.add(_t65), e.push(_t65));
            } else {
              var _t66 = _n37.origin;
              (fo(_t66) && i.has(_t66)) || e.push(_t66);
            }
          r && e.push(r.caret.origin);
          if (
            Ss(t.focus) &&
            fo(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n38 = As(t.focus.origin, "previous");
              Ns(_n38) &&
              o.has(_n38.origin) &&
              !_n38.origin.isEmpty() &&
              _n38.origin.is(e[e.length - 1]);
              _n38 = Ds(_n38)
            )
              (o["delete"](_n38.origin), e.pop());
          for (; e.length > 1; ) {
            var _t67 = e[e.length - 1];
            if (!fo(_t67) || i.has(_t67) || _t67.isEmpty() || o.has(_t67))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n39 = Zs(t.anchor),
              _r24 = Zs(t.anchor.getFlipped()),
              _o19 = function _o19(t) {
                return Cs(t) ? t.origin : t.getNodeAtCaret();
              },
              _i1 =
                _o19(_n39) ||
                _o19(_r24) ||
                (t.anchor.getNodeAtCaret() ? _n39.origin : _r24.origin);
            e.push(_i1);
          }
          return e;
        })(nl(Vs(this), "next"));
        return (Jr() || (this._cachedNodes = e), e);
      };
      _proto8.setTextNodeRange = function setTextNodeRange(t, e, n, r) {
        (this.anchor.set(t.__key, e, "text"),
          this.focus.set(n.__key, r, "text"));
      };
      _proto8.getTextContent = function getTextContent() {
        var t = this.getNodes();
        if (0 === t.length) return "";
        var e = t[0],
          n = t[t.length - 1],
          r = this.anchor,
          o = this.focus,
          i = r.isBefore(o),
          _gr = gr(this),
          s = _gr[0],
          l = _gr[1];
        var a = "",
          c = !0;
        for (var _u5 = 0; _u5 < t.length; _u5++) {
          var _f4 = t[_u5];
          if (fo(_f4) && !_f4.isInline())
            (c || (a += "\n"), (c = !_f4.isEmpty()));
          else if (((c = !1), tr(_f4))) {
            var _t68 = _f4.getTextContent();
            (_f4 === e
              ? _f4 === n
                ? ("element" === r.type &&
                    "element" === o.type &&
                    o.offset !== r.offset) ||
                  (_t68 = s < l ? _t68.slice(s, l) : _t68.slice(l, s))
                : (_t68 = i ? _t68.slice(s) : _t68.slice(l))
              : _f4 === n && (_t68 = i ? _t68.slice(0, l) : _t68.slice(0, s)),
              (a += _t68));
          } else
            (!_o(_f4) && !Ln(_f4)) ||
              (_f4 === n && this.isCollapsed()) ||
              (a += _f4.getTextContent());
        }
        return a;
      };
      _proto8.applyDOMRange = function applyDOMRange(t) {
        var e = Vr(),
          n = e.getEditorState()._selection,
          r = Sr(
            t.startContainer,
            t.startOffset,
            t.endContainer,
            t.endOffset,
            e,
            n,
          );
        if (null === r) return;
        var o = r[0],
          i = r[1];
        (this.anchor.set(o.key, o.offset, o.type, !0),
          this.focus.set(i.key, i.offset, i.type, !0),
          at(this));
      };
      _proto8.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new fr(
          sr(t.key, t.offset, t.type),
          sr(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto8.toggleFormat = function toggleFormat(t) {
        ((this.format = qo(this.format, t, null)), (this.dirty = !0));
      };
      _proto8.setFormat = function setFormat(t) {
        ((this.format = t), (this.dirty = !0));
      };
      _proto8.setStyle = function setStyle(t) {
        ((this.style = t), (this.dirty = !0));
      };
      _proto8.hasFormat = function hasFormat(t) {
        var e = A[t];
        return 0 !== (this.format & e);
      };
      _proto8.insertRawText = function insertRawText(t) {
        var e = t.split(/(\r?\n|\t)/),
          n = [],
          r = e.length;
        for (var _t69 = 0; _t69 < r; _t69++) {
          var _r25 = e[_t69];
          "\n" === _r25 || "\r\n" === _r25
            ? n.push(Fn())
            : "\t" === _r25
              ? n.push(rr())
              : n.push(Zn(_r25));
        }
        this.insertNodes(n);
      };
      _proto8.insertText = function insertText(e) {
        var n = this.anchor,
          r = this.focus,
          o = this.format,
          i = this.style;
        var s = n,
          l = r;
        (!this.isCollapsed() && r.isBefore(n) && ((s = r), (l = n)),
          "element" === s.type &&
            (function (t, e, n, r) {
              var o = t.getNode(),
                i = o.getChildAtIndex(t.offset),
                s = Zn();
              if ((s.setFormat(n), s.setStyle(r), Eo(i))) i.splice(0, 0, [s]);
              else {
                var _t70 = yo(o) ? ko().append(s) : s;
                null === i ? o.append(_t70) : i.insertBefore(_t70);
              }
              (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
            })(s, l, o, i),
          "element" === l.type && Ys(l, Zs(Js(l, "next"))));
        var a = s.offset;
        var c = l.offset;
        var u = this.getNodes(),
          f = u.length;
        var d = u[0];
        tr(d) || t(26);
        var h = d.getTextContent().length,
          g = d.getParentOrThrow();
        var _ = u[f - 1];
        if (
          (1 === f &&
            "element" === l.type &&
            ((c = h), l.set(s.key, c, "text")),
          this.isCollapsed() &&
            a === h &&
            (jo(d) ||
              !d.canInsertTextAfter() ||
              (!g.canInsertTextAfter() && null === d.getNextSibling())))
        ) {
          var _t71 = d.getNextSibling();
          if (
            ((tr(_t71) && _t71.canInsertTextBefore() && !jo(_t71)) ||
              ((_t71 = Zn()),
              _t71.setFormat(o),
              _t71.setStyle(i),
              g.canInsertTextAfter()
                ? d.insertAfter(_t71)
                : g.insertAfter(_t71)),
            _t71.select(0, 0),
            (d = _t71),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (
          this.isCollapsed() &&
          0 === a &&
          (jo(d) ||
            !d.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === d.getPreviousSibling()))
        ) {
          var _t72 = d.getPreviousSibling();
          if (
            ((tr(_t72) && !jo(_t72)) ||
              ((_t72 = Zn()),
              _t72.setFormat(o),
              g.canInsertTextBefore()
                ? d.insertBefore(_t72)
                : g.insertBefore(_t72)),
            _t72.select(),
            (d = _t72),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (d.isSegmented() && a !== h) {
          var _t73 = Zn(d.getTextContent());
          (_t73.setFormat(o), d.replace(_t73), (d = _t73));
        } else if (!this.isCollapsed() && "" !== e) {
          var _t74 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            (fo(_t74) &&
              (!_t74.canInsertTextBefore() || !_t74.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              Cr(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === f) {
          if (Yo(d)) {
            var _t75 = Zn(e);
            return (_t75.select(), void d.replace(_t75));
          }
          var _t76 = d.getFormat(),
            _n40 = d.getStyle();
          if (a !== c || (_t76 === o && _n40 === i)) {
            if (or(d)) {
              var _t77 = Zn(e);
              return (
                _t77.setFormat(o),
                _t77.setStyle(i),
                _t77.select(),
                void d.replace(_t77)
              );
            }
          } else {
            if ("" !== d.getTextContent()) {
              var _t78 = Zn(e);
              if ((_t78.setFormat(o), _t78.setStyle(i), _t78.select(), 0 === a))
                d.insertBefore(_t78, !1);
              else {
                var _d$splitText = d.splitText(a),
                  _e51 = _d$splitText[0];
                _e51.insertAfter(_t78, !1);
              }
              return void (
                _t78.isComposing() &&
                "text" === this.anchor.type &&
                (this.anchor.offset -= e.length)
              );
            }
            (d.setFormat(o), d.setStyle(i));
          }
          var _r26 = c - a;
          ((d = d.spliceText(a, _r26, e, !0)),
            "" === d.getTextContent()
              ? d.remove()
              : "text" === this.anchor.type &&
                ((this.format = _t76),
                (this.style = _n40),
                d.isComposing() && (this.anchor.offset -= e.length)));
        } else {
          var _t79 = new Set([].concat(d.getParentKeys(), _.getParentKeys())),
            _n41 = fo(d) ? d : d.getParentOrThrow();
          var _r27 = fo(_) ? _ : _.getParentOrThrow(),
            _o20 = _;
          if (!_n41.is(_r27) && _r27.isInline())
            do {
              ((_o20 = _r27), (_r27 = _r27.getParentOrThrow()));
            } while (_r27.isInline());
          if (
            ("text" === l.type && (0 !== c || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < c)
          ) {
            if (tr(_) && !Yo(_) && c !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t80 = Zn(_.getTextContent());
                (_.replace(_t80), (_ = _t80));
              }
              (yo(l.getNode()) ||
                "text" !== l.type ||
                (_ = _.spliceText(0, c, "")),
                _t79.add(_.__key));
            } else {
              var _t81 = _.getParentOrThrow();
              _t81.canBeEmpty() || 1 !== _t81.getChildrenSize()
                ? _.remove()
                : _t81.remove();
            }
          } else _t79.add(_.__key);
          var _i10 = _r27.getChildren(),
            _s7 = new Set(u),
            _g4 = _n41.is(_r27),
            _p2 = _n41.isInline() && null === d.getNextSibling() ? _n41 : d;
          for (var _t82 = _i10.length - 1; _t82 >= 0; _t82--) {
            var _e52 = _i10[_t82];
            if (_e52.is(d) || (fo(_e52) && _e52.isParentOf(d))) break;
            _e52.isAttached() &&
              (!_s7.has(_e52) || _e52.is(_o20)
                ? _g4 || _p2.insertAfter(_e52, !1)
                : _e52.remove());
          }
          if (!_g4) {
            var _e53 = _r27,
              _n42 = null;
            for (; null !== _e53; ) {
              var _r28 = _e53.getChildren(),
                _o21 = _r28.length;
              ((0 === _o21 || _r28[_o21 - 1].is(_n42)) &&
                (_t79["delete"](_e53.__key), (_n42 = _e53)),
                (_e53 = _e53.getParent()));
            }
          }
          if (Yo(d)) {
            if (a === h) d.select();
            else {
              var _t83 = Zn(e);
              (_t83.select(), d.replace(_t83));
            }
          } else
            ((d = d.spliceText(a, h - a, e, !0)),
              "" === d.getTextContent()
                ? d.remove()
                : "text" === this.anchor.type &&
                  ((this.format = d.getFormat()),
                  (this.style = d.getStyle()),
                  d.isComposing() && (this.anchor.offset -= e.length)));
          for (var _e54 = 1; _e54 < f; _e54++) {
            var _n43 = u[_e54],
              _r29 = _n43.__key;
            _t79.has(_r29) || _n43.remove();
          }
        }
      };
      _proto8.removeText = function removeText() {
        var t = Er() === this;
        (Hs(this, Qs(Vs(this))), t && Er() !== this && ui(this));
      };
      _proto8.formatText = function formatText(t, e) {
        var _d$splitText2, _p$splitText;
        if (e === void 0) {
          e = null;
        }
        if (this.isCollapsed()) return (this.toggleFormat(t), void ti(null));
        var n = this.getNodes(),
          r = [];
        for (var _t84 of n) tr(_t84) && r.push(_t84);
        var o = function o(e) {
            n.forEach(function (n) {
              if (fo(n)) {
                var _r30 = n.getFormatFlags(t, e);
                n.setTextFormat(_r30);
              }
            });
          },
          i = r.length;
        if (0 === i) return (this.toggleFormat(t), ti(null), void o(e));
        var s = this.anchor,
          l = this.focus,
          a = this.isBackward(),
          c = a ? l : s,
          u = a ? s : l;
        var f = 0,
          d = r[0],
          h = "element" === c.type ? 0 : c.offset;
        if (
          ("text" === c.type &&
            h === d.getTextContentSize() &&
            ((f = 1), (d = r[1]), (h = 0)),
          null == d)
        )
          return;
        var g = d.getFormatFlags(t, e);
        o(g);
        var _ = i - 1;
        var p = r[_];
        var y = "text" === u.type ? u.offset : p.getTextContentSize();
        if (d.is(p)) {
          if (h === y) return;
          if (jo(d) || (0 === h && y === d.getTextContentSize()))
            d.setFormat(g);
          else {
            var _t85 = d.splitText(h, y),
              _e55 = 0 === h ? _t85[0] : _t85[1];
            (_e55.setFormat(g),
              "text" === c.type && c.set(_e55.__key, 0, "text"),
              "text" === u.type && u.set(_e55.__key, y - h, "text"));
          }
          return void (this.format = g);
        }
        (0 === h ||
          jo(d) ||
          ((_d$splitText2 = d.splitText(h)), (d = _d$splitText2[1]), (h = 0)),
          d.setFormat(g));
        var m = p.getFormatFlags(t, g);
        y > 0 &&
          (y === p.getTextContentSize() ||
            jo(p) ||
            ((_p$splitText = p.splitText(y)),
            (p = _p$splitText[0]),
            _p$splitText),
          p.setFormat(m));
        for (var _e56 = f + 1; _e56 < _; _e56++) {
          var _n44 = r[_e56],
            _o22 = _n44.getFormatFlags(t, m);
          _n44.setFormat(_o22);
        }
        ("text" === c.type && c.set(d.__key, h, "text"),
          "text" === u.type && u.set(p.__key, y, "text"),
          (this.format = g | m));
      };
      _proto8.insertNodes = function insertNodes(e) {
        if (0 === e.length) return;
        if (
          (this.isCollapsed() || this.removeText(), "root" === this.anchor.key)
        ) {
          this.insertParagraph();
          var _n45 = Er();
          return (ur(_n45) || t(134), _n45.insertNodes(e));
        }
        var n = (this.isBackward() ? this.focus : this.anchor).getNode(),
          r = fs(n, es),
          o = e[e.length - 1];
        if (fo(r) && "__language" in r) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t86 = Fr(this);
            (r.splice(_t86, 0, e), o.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (fo(t) || _o(t)) && !t.isInline();
          })
        ) {
          fo(r) || t(211, n.constructor.name, n.getType());
          var _i11 = Fr(this);
          return (r.splice(_i11, 0, e), void o.selectEnd());
        }
        var i = (function (t) {
            var e = ko();
            var n = null;
            for (var _r31 = 0; _r31 < t.length; _r31++) {
              var _o23 = t[_r31],
                _i12 = Ln(_o23);
              if (
                _i12 ||
                (_o(_o23) && _o23.isInline()) ||
                (fo(_o23) && _o23.isInline()) ||
                tr(_o23) ||
                _o23.isParentRequired()
              ) {
                if (
                  null === n &&
                  ((n = _o23.createParentElementNode()), e.append(n), _i12)
                )
                  continue;
                null !== n && n.append(_o23);
              } else (e.append(_o23), (n = null));
            }
            return e;
          })(e),
          s = i.getLastDescendant(),
          l = i.getChildren(),
          a = !fo(r) || !r.isEmpty() ? this.insertParagraph() : null,
          c = l[l.length - 1];
        var u = l[0];
        var f;
        (fo((f = u)) &&
          es(f) &&
          !f.isEmpty() &&
          fo(r) &&
          (!r.isEmpty() || r.canMergeWhenEmpty()) &&
          (fo(r) || t(211, n.constructor.name, n.getType()),
          r.append.apply(r, u.getChildren()),
          (u = l[1])),
          u &&
            (null === r && t(212, n.constructor.name, n.getType()),
            (function (e, n) {
              var r = n.getParentOrThrow().getLastChild();
              var o = n;
              var i = [n];
              for (; o !== r; )
                (o.getNextSibling() || t(140),
                  (o = o.getNextSibling()),
                  i.push(o));
              var s = e;
              for (var _t87 of i) s = s.insertAfter(_t87);
            })(r, u)));
        var d = fs(s, es);
        (a &&
          fo(d) &&
          (a.canMergeWhenEmpty() || es(c)) &&
          (d.append.apply(d, a.getChildren()), a.remove()),
          fo(r) && r.isEmpty() && r.remove(),
          s.selectEnd());
        var h = fo(r) ? r.getLastChild() : null;
        Ln(h) && d !== r && h.remove();
      };
      _proto8.insertParagraph = function insertParagraph() {
        if ("root" === this.anchor.key) {
          var _t88 = ko();
          return (
            ai().splice(this.anchor.offset, 0, [_t88]),
            _t88.select(),
            _t88
          );
        }
        var e = Fr(this),
          n = fs(this.anchor.getNode(), es);
        fo(n) || t(213);
        var r = n.getChildAtIndex(e),
          o = r ? [r].concat(r.getNextSiblings()) : [],
          i = n.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, o), i.selectStart(), i) : null;
      };
      _proto8.insertLineBreak = function insertLineBreak(t) {
        var e = Fn();
        if ((this.insertNodes([e]), t)) {
          var _t89 = e.getParentOrThrow(),
            _n46 = e.getIndexWithinParent();
          _t89.select(_n46, _n46);
        }
      };
      _proto8.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          r = t[e - 1];
        var _gr2 = gr(this),
          o = _gr2[0],
          i = _gr2[1],
          s = this.isBackward(),
          _ref14 = s ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref14[0],
          a = _ref14[1],
          _ref15 = s ? [i, o] : [o, i],
          c = _ref15[0],
          u = _ref15[1];
        if (0 === e) return [];
        if (1 === e) {
          if (tr(n) && !this.isCollapsed()) {
            var _t90 = n.splitText(c, u),
              _e57 = 0 === c ? _t90[0] : _t90[1];
            return _e57
              ? (l.set(_e57.getKey(), 0, "text"),
                a.set(_e57.getKey(), _e57.getTextContentSize(), "text"),
                [_e57])
              : [];
          }
          return [n];
        }
        if (
          (tr(n) &&
            (c === n.getTextContentSize()
              ? t.shift()
              : 0 !== c &&
                ((_n$splitText = n.splitText(c)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          tr(r))
        ) {
          var _r$splitText;
          var _e58 = r.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e58 &&
              ((_r$splitText = r.splitText(u)),
              (r = _r$splitText[0]),
              (t[t.length - 1] = r),
              a.set(r.getKey(), r.getTextContentSize(), "text"));
        }
        return t;
      };
      _proto8.modify = function modify(t, e, n) {
        if (Rr(this, t, e, n)) return;
        var r = "move" === t,
          o = Vr(),
          i = Vi(Bi(o));
        if (!i) return;
        var s = o._blockCursorElement,
          l = o._rootElement,
          a = this.focus.getNode();
        if (
          (null === l ||
            null === s ||
            !fo(a) ||
            a.isInline() ||
            a.canBeEmpty() ||
            Hi(s, o, l),
          this.dirty)
        ) {
          var _t91 = Di(o, this.anchor.key),
            _e59 = Di(o, this.focus.key);
          ("text" === this.anchor.type && (_t91 = Go(_t91)),
            "text" === this.focus.type && (_e59 = Go(_e59)),
            _t91 &&
              _e59 &&
              Dr(i, _t91, this.anchor.offset, _e59, this.focus.offset));
        }
        if (
          ((function (t, e, n, r) {
            t.modify(e, n, r);
          })(i, t, e ? "backward" : "forward", n),
          i.rangeCount > 0)
        ) {
          var _t92 = i.getRangeAt(0),
            _n47 = this.anchor.getNode(),
            _o24 = yo(_n47) ? _n47 : zi(_n47);
          if ((this.applyDOMRange(_t92), (this.dirty = !0), !r)) {
            var _n48 = this.getNodes(),
              _r32 = [];
            var _s8 = !1;
            for (var _t93 = 0; _t93 < _n48.length; _t93++) {
              var _e60 = _n48[_t93];
              Ri(_e60, _o24) ? _r32.push(_e60) : (_s8 = !0);
            }
            if (_s8 && _r32.length > 0)
              if (e) {
                var _t94 = _r32[0];
                fo(_t94)
                  ? _t94.selectStart()
                  : _t94.getParentOrThrow().selectStart();
              } else {
                var _t95 = _r32[_r32.length - 1];
                fo(_t95)
                  ? _t95.selectEnd()
                  : _t95.getParentOrThrow().selectEnd();
              }
            (i.anchorNode === _t92.startContainer &&
              i.anchorOffset === _t92.startOffset) ||
              (function (t) {
                var e = t.focus,
                  n = t.anchor,
                  r = n.key,
                  o = n.offset,
                  i = n.type;
                (n.set(e.key, e.offset, e.type, !0), e.set(r, o, i, !0));
              })(this);
          }
        }
        "lineboundary" === n && Rr(this, t, e, n, "decorators");
      };
      _proto8.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            fo(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t96 = e.getParent(),
            _n49 =
              e.getNextSibling() ||
              (null === _t96 ? null : _t96.getNextSibling());
          if (fo(_n49) && _n49.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto8.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e61 = this.anchor;
          var _n50 = _e61.getNode();
          if (this.forwardDeletion(_e61, _n50, t)) return;
          var _r33 = Fs(Js(_e61, t ? "previous" : "next"));
          if (
            _r33.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t97 = { type: "initial" };
            for (var _e62 of _r33.iterNodeCarets("shadowRoot"))
              if (Ns(_e62)) {
                if (_e62.origin.isInline());
                else {
                  if (_e62.origin.isShadowRoot()) {
                    if ("merge-block" === _t97.type) break;
                    if (
                      fo(_r33.anchor.origin) &&
                      _r33.anchor.origin.isEmpty()
                    ) {
                      var _t98 = Zs(_e62);
                      (Hs(this, Rs(_t98, _t98)), _r33.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t97.type &&
                    "merge-block" !== _t97.type) ||
                    (_t97 = {
                      block: _t97.block,
                      caret: _e62,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t97.type) break;
                if (Ss(_e62)) {
                  if (fo(_e62.origin)) {
                    if (_e62.origin.isInline()) {
                      if (!_e62.origin.isParentOf(_r33.anchor.origin)) break;
                    } else
                      _t97 = { block: _e62.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (_o(_e62.origin)) {
                    if (_e62.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t97.type &&
                      (_e62.origin.isKeyboardSelectable() ||
                        !_e62.origin.isInline()) &&
                      fo(_r33.anchor.origin) &&
                      _r33.anchor.origin.isEmpty()
                    ) {
                      _r33.anchor.origin.remove();
                      var _t99 = vr();
                      (_t99.add(_e62.origin.getKey()), ui(_t99));
                    } else _e62.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t97.type) {
              var _t100 = _t97,
                _e63 = _t100.caret,
                _n51 = _t100.block;
              return (
                Hs(
                  this,
                  Rs(
                    !_e63.origin.isEmpty() && _n51.isEmpty()
                      ? Gs(Es(_n51, _e63.direction))
                      : _r33.anchor,
                    _e63,
                  ),
                ),
                this.removeText()
              );
            }
          }
          var _o25 = this.focus;
          if ((this.modify("extend", t, "character"), this.isCollapsed())) {
            if (t && 0 === _e61.offset && _r(this, _e61.getNode())) return;
          } else {
            var _r34 = "text" === _o25.type ? _o25.getNode() : null;
            if (
              ((_n50 = "text" === _e61.type ? _e61.getNode() : null),
              null !== _r34 && _r34.isSegmented())
            ) {
              var _e64 = _o25.offset,
                _i13 = _r34.getTextContentSize();
              if (_r34.is(_n50) || (t && _e64 !== _i13) || (!t && 0 !== _e64))
                return void yr(_r34, t, _e64);
            } else if (null !== _n50 && _n50.isSegmented()) {
              var _o26 = _e61.offset,
                _i14 = _n50.getTextContentSize();
              if (_n50.is(_r34) || (t && 0 !== _o26) || (!t && _o26 !== _i14))
                return void yr(_n50, t, _o26);
            }
            !(function (t, e) {
              var n = t.anchor,
                r = t.focus,
                o = n.getNode(),
                i = r.getNode();
              if (o === i && "text" === n.type && "text" === r.type) {
                var _t101 = n.offset,
                  _i15 = r.offset,
                  _s9 = _t101 < _i15,
                  _l6 = _s9 ? _t101 : _i15,
                  _a5 = _s9 ? _i15 : _t101,
                  _c5 = _a5 - 1;
                if (_l6 !== _c5) {
                  (function (t) {
                    return !(di(t) || pr(t));
                  })(o.getTextContent().slice(_l6, _a5)) &&
                    (e ? r.set(r.key, _c5, r.type) : n.set(n.key, _c5, n.type));
                }
              }
            })(this, t);
          }
        }
        if (
          (this.removeText(),
          t &&
            !e &&
            this.isCollapsed() &&
            "element" === this.anchor.type &&
            0 === this.anchor.offset)
        ) {
          var _t102 = this.anchor.getNode();
          _t102.isEmpty() &&
            yo(_t102.getParent()) &&
            null === _t102.getPreviousSibling() &&
            _r(this, _t102);
        }
      };
      _proto8.deleteLine = function deleteLine(t) {
        (this.isCollapsed() && this.modify("extend", t, "lineboundary"),
          this.isCollapsed() ? this.deleteCharacter(t) : this.removeText());
      };
      _proto8.deleteWord = function deleteWord(t) {
        if (this.isCollapsed()) {
          var _e65 = this.anchor,
            _n52 = _e65.getNode();
          if (this.forwardDeletion(_e65, _n52, t)) return;
          this.modify("extend", t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto8.isBackward = function isBackward() {
        return this.focus.isBefore(this.anchor);
      };
      _proto8.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return fr;
    })();
    function dr(t) {
      return t instanceof _cr;
    }
    function hr(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function gr(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        r = e[1];
      return "element" === n.type &&
        "element" === r.type &&
        n.key === r.key &&
        n.offset === r.offset
        ? [0, 0]
        : [hr(n), hr(r)];
    }
    function _r(t, e) {
      for (var _n53 = e; _n53; _n53 = _n53.getParent()) {
        if (fo(_n53)) {
          if (_n53.collapseAtStart(t)) return !0;
          if (Wi(_n53)) break;
        }
        if (_n53.getPreviousSibling()) break;
      }
      return !1;
    }
    var pr = (function () {
      try {
        var _t103 = new RegExp("\\p{Emoji}", "u"),
          _e66 = _t103.test.bind(_t103);
        if (_e66("\u2764\ufe0f") && _e66("#\ufe0f\u20e3") && _e66("\u{1f44d}"))
          return _e66;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function yr(t, e, n) {
      var r = t,
        o = r.getTextContent().split(/(?=\s)/g),
        i = o.length;
      var s = 0,
        l = 0;
      for (var _t104 = 0; _t104 < i; _t104++) {
        var _r35 = _t104 === i - 1;
        if (
          ((l = s), (s += o[_t104].length), (e && s === n) || s > n || _r35)
        ) {
          (o.splice(_t104, 1), _r35 && (l = void 0));
          break;
        }
      }
      var a = o.join("").trim();
      "" === a ? r.remove() : (r.setTextContent(a), r.select(l, l));
    }
    function mr(e, n, r, o) {
      var i,
        s = n;
      if (qi(e)) {
        var _l7 = !1;
        var _a6 = e.childNodes,
          _c6 = _a6.length,
          _u6 = o._blockCursorElement;
        s === _c6 && ((_l7 = !0), (s = _c6 - 1));
        var _f5 = _a6[s],
          _d5 = !1;
        if (_f5 === _u6) ((_f5 = _a6[s + 1]), (_d5 = !0));
        else if (null !== _u6) {
          var _t105 = _u6.parentNode;
          if (e === _t105) {
            n > Array.prototype.indexOf.call(_t105.children, _u6) && s--;
          }
        }
        if (((i = fi(_f5)), tr(i))) s = Ms(i, _l7 ? "next" : "previous");
        else {
          var _a7 = fi(e);
          if (null === _a7) return null;
          if (fo(_a7)) {
            var _u7$resolveChildIndex;
            var _c7 = o.getElementByKey(_a7.getKey());
            null === _c7 && t(214);
            var _u7 = _a7.getDOMSlot(_c7);
            ((_u7$resolveChildIndex = _u7.resolveChildIndex(_a7, _c7, e, n)),
              (_a7 = _u7$resolveChildIndex[0]),
              (s = _u7$resolveChildIndex[1]),
              fo(_a7) || t(215),
              _l7 &&
                s >= _a7.getChildrenSize() &&
                (s = Math.max(0, _a7.getChildrenSize() - 1)));
            var _f6 = _a7.getChildAtIndex(s);
            if (
              fo(_f6) &&
              (function (t, e, n) {
                var r = t.getParent();
                return (
                  null === n ||
                  null === r ||
                  !r.canBeEmpty() ||
                  r !== n.getNode()
                );
              })(_f6, 0, r)
            ) {
              var _t106 = _l7
                ? _f6.getLastDescendant()
                : _f6.getFirstDescendant();
              (null === _t106
                ? (_a7 = _f6)
                : ((_f6 = _t106),
                  (_a7 = fo(_f6) ? _f6 : _f6.getParentOrThrow())),
                (s = 0));
            }
            tr(_f6)
              ? ((i = _f6),
                (_a7 = null),
                (s = Ms(_f6, _l7 ? "next" : "previous")))
              : _f6 !== _a7 &&
                _l7 &&
                !_d5 &&
                (fo(_a7) || t(216),
                (s = Math.min(_a7.getChildrenSize(), s + 1)));
          } else {
            var _t107 = _a7.getIndexWithinParent();
            ((s = 0 === n && _o(_a7) && fi(e) === _a7 ? _t107 : _t107 + 1),
              (_a7 = _a7.getParentOrThrow()));
          }
          if (fo(_a7)) return sr(_a7.__key, s, "element");
        }
      } else i = fi(e);
      return tr(i) ? sr(i.__key, Ms(i, s, "clamp"), "text") : null;
    }
    function xr(t, e, n) {
      var r = t.offset,
        o = t.getNode();
      if (0 === r) {
        var _r36 = o.getPreviousSibling(),
          _i16 = o.getParent();
        if (e) {
          if ((n || !e) && null === _r36 && fo(_i16) && _i16.isInline()) {
            var _e67 = _i16.getPreviousSibling();
            tr(_e67) && t.set(_e67.__key, _e67.getTextContent().length, "text");
          }
        } else
          fo(_r36) && !n && _r36.isInline()
            ? t.set(_r36.__key, _r36.getChildrenSize(), "element")
            : tr(_r36) &&
              t.set(_r36.__key, _r36.getTextContent().length, "text");
      } else if (r === o.getTextContent().length) {
        var _r37 = o.getNextSibling(),
          _i17 = o.getParent();
        if (e && fo(_r37) && _r37.isInline()) t.set(_r37.__key, 0, "element");
        else if (
          (n || e) &&
          null === _r37 &&
          fo(_i17) &&
          _i17.isInline() &&
          !_i17.canInsertTextAfter()
        ) {
          var _e68 = _i17.getNextSibling();
          tr(_e68) && t.set(_e68.__key, 0, "text");
        }
      }
    }
    function Cr(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n54 = t.isBefore(e),
          _r38 = t.is(e);
        (xr(t, _n54, _r38),
          xr(e, !_n54, _r38),
          _r38 && e.set(t.key, t.offset, t.type));
      }
    }
    function Sr(t, e, n, r, o, i) {
      if (null === t || null === n || !Wo(o, t, n)) return null;
      var s = mr(t, e, ur(i) ? i.anchor : null, o);
      if (null === s) return null;
      var l = mr(n, r, ur(i) ? i.focus : null, o);
      if (null === l) return null;
      if ("element" === s.type && "element" === l.type) {
        var _e69 = fi(t),
          _r39 = fi(n);
        if (_o(_e69) && _o(_r39)) return null;
      }
      return (Cr(s, l), [s, l]);
    }
    function Nr(t, e, n, r, o, i) {
      var s = Hr(),
        l = new _fr(sr(t, e, o), sr(n, r, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function Tr() {
      var t = sr("root", 0, "element"),
        e = sr("root", 0, "element");
      return new _fr(t, e, 0, "");
    }
    function vr() {
      return new _cr(new Set());
    }
    function kr(t, e, n, r) {
      var o = n._window;
      if (null === o) return null;
      var i = r || o.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        a =
          !K &&
          (l ||
            "beforeinput" === s ||
            "compositionstart" === s ||
            "compositionend" === s ||
            ("click" === s && i && 3 === i.detail) ||
            "drop" === s ||
            void 0 === s);
      var c, u, f, d;
      if (ur(t) && !a) return t.clone();
      if (null === e) return null;
      if (
        ((c = e.anchorNode),
        (u = e.focusNode),
        (f = e.anchorOffset),
        (d = e.focusOffset),
        (l || void 0 === s) && ur(t) && !Wo(n, c, u))
      )
        return t.clone();
      var h = Sr(c, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1];
      var p = 0,
        y = "";
      if (ur(t)) {
        var _e70 = t.anchor;
        if (g.key === _e70.key) ((p = t.format), (y = t.style));
        else {
          var _t108 = g.getNode();
          tr(_t108)
            ? ((p = _t108.getFormat()), (y = _t108.getStyle()))
            : fo(_t108) &&
              ((p = _t108.getTextFormat()), (y = _t108.getTextStyle()));
        }
      }
      return new _fr(g, _, p, y);
    }
    function Er() {
      return Hr()._selection;
    }
    function Or() {
      return Vr()._editorState._selection;
    }
    function Mr(t, e, n, r) {
      if (r === void 0) {
        r = 1;
      }
      var o = t.anchor,
        i = t.focus,
        s = o.getNode(),
        l = i.getNode();
      if (!e.is(s) && !e.is(l)) return;
      var a = e.__key;
      if (t.isCollapsed()) {
        var _e71 = o.offset;
        if ((n <= _e71 && r > 0) || (n < _e71 && r < 0)) {
          var _n55 = Math.max(0, _e71 + r);
          (o.set(a, _n55, "element"), i.set(a, _n55, "element"), br(t));
        }
      } else {
        var _s0 = t.isBackward(),
          _l8 = _s0 ? i : o,
          _c8 = _l8.getNode(),
          _u8 = _s0 ? o : i,
          _f7 = _u8.getNode();
        if (e.is(_c8)) {
          var _t109 = _l8.offset;
          ((n <= _t109 && r > 0) || (n < _t109 && r < 0)) &&
            _l8.set(a, Math.max(0, _t109 + r), "element");
        }
        if (e.is(_f7)) {
          var _t110 = _u8.offset;
          ((n <= _t110 && r > 0) || (n < _t110 && r < 0)) &&
            _u8.set(a, Math.max(0, _t110 + r), "element");
        }
      }
      br(t);
    }
    function br(t) {
      var e = t.anchor,
        n = e.offset,
        r = t.focus,
        o = r.offset,
        i = e.getNode(),
        s = r.getNode();
      if (t.isCollapsed()) {
        if (!fo(i)) return;
        var _t111 = i.getChildrenSize(),
          _o27 = n >= _t111,
          _s1 = _o27 ? i.getChildAtIndex(_t111 - 1) : i.getChildAtIndex(n);
        if (tr(_s1)) {
          var _t112 = 0;
          (_o27 && (_t112 = _s1.getTextContentSize()),
            e.set(_s1.__key, _t112, "text"),
            r.set(_s1.__key, _t112, "text"));
        }
        return;
      }
      if (fo(i)) {
        var _t113 = i.getChildrenSize(),
          _r40 = n >= _t113,
          _o28 = _r40 ? i.getChildAtIndex(_t113 - 1) : i.getChildAtIndex(n);
        if (tr(_o28)) {
          var _t114 = 0;
          (_r40 && (_t114 = _o28.getTextContentSize()),
            e.set(_o28.__key, _t114, "text"));
        }
      }
      if (fo(s)) {
        var _t115 = s.getChildrenSize(),
          _e72 = o >= _t115,
          _n56 = _e72 ? s.getChildAtIndex(_t115 - 1) : s.getChildAtIndex(o);
        if (tr(_n56)) {
          var _t116 = 0;
          (_e72 && (_t116 = _n56.getTextContentSize()),
            r.set(_n56.__key, _t116, "text"));
        }
      }
    }
    function Ar(t, e, n, r, o) {
      var i = null,
        s = 0,
        l = null;
      (null !== r
        ? ((i = r.__key),
          tr(r)
            ? ((s = r.getTextContentSize()), (l = "text"))
            : fo(r) && ((s = r.getChildrenSize()), (l = "element")))
        : null !== o &&
          ((i = o.__key), tr(o) ? (l = "text") : fo(o) && (l = "element")),
        null !== i && null !== l
          ? t.set(i, s, l)
          : ((s = e.getIndexWithinParent()),
            -1 === s && (s = n.getChildrenSize()),
            t.set(n.__key, s, "element")));
    }
    function wr(t, e, n, r, o) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : o), "text")
        : t.offset > r.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Dr(t, e, n, r, o) {
      try {
        t.setBaseAndExtent(e, n, r, o);
      } catch (t) {}
    }
    function Pr(t, e, n) {
      var r = Di(t, e.getKey());
      if (fo(e)) {
        var _t117 = e.getDOMSlot(r);
        return [_t117.element, n + _t117.getFirstChildOffset()];
      }
      return [r, n];
    }
    function Ir(t, e, n, r, o, s, l) {
      var a = r.anchorNode,
        c = r.focusNode,
        u = r.anchorOffset,
        f = r.focusOffset,
        d = document.activeElement;
      if ((o.has(On) && d !== s) || (null !== d && zo(d))) return;
      if (!ur(e))
        return void (null !== t && Wo(n, a, c) && r.removeAllRanges());
      var h = e.anchor,
        g = e.focus,
        _ = h.getNode(),
        p = g.getNode(),
        _Pr = Pr(n, _, h.offset),
        y = _Pr[0],
        m = _Pr[1],
        _Pr2 = Pr(n, p, g.offset),
        x = _Pr2[0],
        C = _Pr2[1],
        S = e.format,
        N = e.style,
        T = e.isCollapsed();
      var v = y,
        k = x,
        E = !1;
      var O, M, b, A, w;
      if (
        ("text" === h.type
          ? ((v = Go(y)), (E = _.getFormat() !== S || _.getStyle() !== N))
          : ur(t) && "text" === t.anchor.type && (E = !0),
        "text" === g.type && (k = Go(x)),
        null !== v && null !== k) &&
        (T &&
          (null === t || E || (ur(t) && (t.format !== S || t.style !== N))) &&
          ((O = S),
          (M = N),
          (b = m),
          (A = h.key),
          (w = performance.now()),
          (en = [O, M, b, A, w])),
        u !== m ||
          f !== C ||
          a !== v ||
          c !== k ||
          ("Range" === r.type && T) ||
          ((null !== d && s.contains(d)) ||
            o.has(An) ||
            s.focus({ preventScroll: !0 }),
          "element" === h.type))
      ) {
        if (
          (Dr(r, v, m, k, C),
          !i ||
            !e.isCollapsed() ||
            null === s ||
            o.has(An) ||
            (null !== document.activeElement &&
              s.contains(document.activeElement)) ||
            s.focus({ preventScroll: !0 }),
          !o.has(Mn) &&
            e.isCollapsed() &&
            null !== s &&
            s === document.activeElement)
        ) {
          var _t118 =
            ur(e) && "element" === e.anchor.type
              ? v.childNodes[m] || null
              : r.rangeCount > 0
                ? r.getRangeAt(0)
                : null;
          if (null !== _t118) {
            var _e73;
            if (_t118 instanceof Text) {
              var _n57 = document.createRange();
              (_n57.selectNode(_t118), (_e73 = _n57.getBoundingClientRect()));
            } else _e73 = _t118.getBoundingClientRect();
            !(function (t, e, n) {
              var r = Ii(n),
                o = Ki(r);
              if (null === r || null === o) return;
              var i = e.top,
                s = e.bottom,
                l = 0,
                a = 0,
                c = n;
              for (; null !== c; ) {
                var _e74 = c === r.body;
                if (_e74) {
                  ((l = 0), (a = Bi(t).innerHeight));
                  var _e75 = o.getComputedStyle(r.documentElement),
                    _n58 = parseFloat(_e75.scrollPaddingTop),
                    _i18 = parseFloat(_e75.scrollPaddingBottom);
                  (isFinite(_n58) && (l += _n58),
                    isFinite(_i18) && (a -= _i18));
                } else {
                  var _t119 = c.getBoundingClientRect();
                  ((l = _t119.top), (a = _t119.bottom));
                }
                var _n59 = 0;
                if (
                  (i < l ? (_n59 = -(l - i)) : s > a && (_n59 = s - a),
                  0 !== _n59)
                )
                  if (_e74) o.scrollBy(0, _n59);
                  else {
                    var _t120 = c.scrollTop;
                    c.scrollTop += _n59;
                    var _e76 = c.scrollTop - _t120;
                    ((i -= _e76), (s -= _e76));
                  }
                if (_e74) break;
                c = Pi(c);
              }
            })(n, _e73, s);
          }
        }
        Ve = !0;
      }
    }
    function Fr(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var r = Er();
      (ur(r) && (n = r), ur(n) || t(161));
      var o = n.anchor;
      var i = o.getNode(),
        s = o.offset;
      for (; !es(i); ) {
        var _Lr;
        var _t121 = i;
        if (((_Lr = Lr(i, s)), (i = _Lr[0]), (s = _Lr[1]), _t121.is(i))) break;
      }
      return s;
    }
    function Lr(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t122 = ko();
        return (ai().append(_t122), _t122.select(), [ai(), 0]);
      }
      if (tr(t)) {
        var _r41 = t.splitText(e);
        if (0 === _r41.length) return [n, t.getIndexWithinParent()];
        var _o29 = 0 === e ? 0 : 1;
        return [n, _r41[0].getIndexWithinParent() + _o29];
      }
      if (!fo(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _n60 = new _fr(
            sr(t.__key, e, "element"),
            sr(t.__key, e, "element"),
            0,
            "",
          ),
          _o30 = t.insertNewAfter(_n60);
        _o30 && _o30.append.apply(_o30, [r].concat(r.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function Rr(t, e, n, r, o) {
      if (o === void 0) {
        o = "decorators-and-blocks";
      }
      if ("move" === e && "character" === r && !t.isCollapsed()) {
        var _ref16 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e77 = _ref16[0],
          _r42 = _ref16[1];
        return (_r42.set(_e77.key, _e77.offset, _e77.type), !0);
      }
      var i = Js(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === r,
        l = "move" === e;
      var a = i,
        c = "decorators-and-blocks" === o;
      if (!tl(a)) {
        for (var _t123 of a) {
          c = !1;
          var _e78 = _t123.origin;
          if (
            !_o(_e78) ||
            _e78.isIsolated() ||
            ((a = _t123), !s || !_e78.isInline())
          )
            break;
        }
        if (c)
          for (var _t124 of Fs(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Ns(_t124)) _t124.origin.isInline() || (a = _t124);
            else {
              if (fo(_t124.origin)) continue;
              _o(_t124.origin) && !_t124.origin.isInline() && (a = _t124);
            }
            break;
          }
      }
      if (a === i) return !1;
      if (l && !s && _o(a.origin) && a.origin.isKeyboardSelectable()) {
        var _t125 = vr();
        return (_t125.add(a.origin.getKey()), ui(_t125), !0);
      }
      return ((a = Zs(a)), l && Ys(t.anchor, a), Ys(t.focus, a), c || !s);
    }
    var Kr = null,
      Br = null,
      zr = !1,
      Wr = !1,
      $r = 0;
    var Ur = { characterData: !0, childList: !0, subtree: !0 };
    function Jr() {
      return zr || (null !== Kr && Kr._readOnly);
    }
    function Yr() {
      zr && t(13);
    }
    function jr() {
      $r > 99 && t(14);
    }
    function Hr() {
      return (null === Kr && t(195, Gr()), Kr);
    }
    function Vr() {
      return (null === Br && t(196, Gr()), Br);
    }
    function Gr() {
      var t = 0;
      var e = new Set(),
        n = _Do.version;
      if ("undefined" != typeof window)
        for (var _r43 of document.querySelectorAll("[contenteditable]")) {
          var _o31 = Jo(_r43);
          if ($o(_o31)) t++;
          else if (_o31) {
            var _t126 = String(_o31.constructor.version || "<0.17.1");
            (_t126 === n &&
              (_t126 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t126));
          }
        }
      var r =
        " Detected on the page: " +
        t +
        " compatible editor(s) with version " +
        n;
      return (
        e.size &&
          (r +=
            " and incompatible editors with versions " +
            Array.from(e).join(", ")),
        r
      );
    }
    function qr() {
      return Br;
    }
    function Xr(t, e, n) {
      var r = e.__type,
        o = Lo(t, r);
      var i = n.get(r);
      void 0 === i && ((i = Array.from(o.transforms)), n.set(r, i));
      var s = i.length;
      for (var _t127 = 0; _t127 < s && (i[_t127](e), e.isAttached()); _t127++);
    }
    function Qr(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function Zr(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var r = e;
      Array.isArray(e) || (r = [e]);
      for (var _t128 of r) n.add(_t128);
    }
    function to(e, n) {
      var r = e.type,
        o = n.get(r);
      void 0 === o && t(17, r);
      var i = o.klass;
      e.type !== i.getType() && t(18, i.name);
      var s = i.importJSON(e),
        l = e.children;
      if (fo(s) && Array.isArray(l))
        for (var _t129 = 0; _t129 < l.length; _t129++) {
          var _e79 = to(l[_t129], n);
          s.append(_e79);
        }
      return s;
    }
    function eo(t, e, n) {
      var r = Kr,
        o = zr,
        i = Br;
      ((Kr = e), (zr = !0), (Br = t));
      try {
        return n();
      } finally {
        ((Kr = r), (zr = o), (Br = i));
      }
    }
    function no(t, e) {
      var n = t._pendingEditorState,
        r = t._rootElement,
        o = t._headless || null === r;
      if (null === n) return;
      var i = t._editorState,
        s = i._selection,
        l = n._selection,
        a = 0 !== t._dirtyType,
        c = Kr,
        u = zr,
        f = Br,
        d = t._updating,
        h = t._observer;
      var g = null;
      if (
        ((t._pendingEditorState = null),
        (t._editorState = n),
        !o && a && null !== h)
      ) {
        ((Br = t), (Kr = n), (zr = !1), (t._updating = !0));
        try {
          var _e80 = t._dirtyType,
            _r44 = t._dirtyElements,
            _o32 = t._dirtyLeaves;
          (h.disconnect(), (g = $t(i, n, t, _e80, _r44, _o32)));
        } catch (e) {
          if ((e instanceof Error && t._onError(e), Wr)) throw e;
          return (
            Mo(t, null, r, n),
            H(t),
            (t._dirtyType = 2),
            (Wr = !0),
            no(t, i),
            void (Wr = !1)
          );
        } finally {
          (h.observe(r, Ur), (t._updating = d), (Kr = c), (zr = u), (Br = f));
        }
      }
      n._readOnly || (n._readOnly = !0);
      var _ = t._dirtyLeaves,
        p = t._dirtyElements,
        y = t._normalizedNodes,
        m = t._updateTags,
        x = t._deferred;
      (a &&
        ((t._dirtyType = 0),
        t._cloneNotNeeded.clear(),
        (t._dirtyLeaves = new Set()),
        (t._dirtyElements = new Map()),
        (t._normalizedNodes = new Set()),
        (t._updateTags = new Set())),
        (function (t, e) {
          var n = t._decorators;
          var r = t._pendingDecorators || n;
          var o = e._nodeMap;
          var i;
          for (i in r) o.has(i) || (r === n && (r = si(t)), delete r[i]);
        })(t, n));
      var C = o ? null : Vi(Bi(t));
      if (
        t._editable &&
        null !== C &&
        (a || null === l || l.dirty || !l.is(s)) &&
        null !== r &&
        !m.has(bn)
      ) {
        ((Br = t), (Kr = n));
        try {
          if ((null !== h && h.disconnect(), a || null === l || l.dirty)) {
            var _e81 = t._blockCursorElement;
            (null !== _e81 && Hi(_e81, t, r), Ir(s, l, t, C, m, r));
          }
          !(function (t, e, n) {
            var r = t._blockCursorElement;
            if (
              ur(n) &&
              n.isCollapsed() &&
              "element" === n.anchor.type &&
              e.contains(document.activeElement)
            ) {
              var _o33 = n.anchor,
                _i19 = _o33.getNode(),
                _s10 = _o33.offset;
              var _l9 = !1,
                _a8 = null;
              if (_s10 === _i19.getChildrenSize()) {
                ji(_i19.getChildAtIndex(_s10 - 1)) && (_l9 = !0);
              } else {
                var _e82 = _i19.getChildAtIndex(_s10);
                if (null !== _e82 && ji(_e82)) {
                  var _n61 = _e82.getPreviousSibling();
                  (null === _n61 || ji(_n61)) &&
                    ((_l9 = !0), (_a8 = t.getElementByKey(_e82.__key)));
                }
              }
              if (_l9) {
                var _n62 = t.getElementByKey(_i19.__key);
                return (
                  null === r &&
                    (t._blockCursorElement = r =
                      (function (t) {
                        var e = t.theme,
                          n = document.createElement("div");
                        ((n.contentEditable = "false"),
                          n.setAttribute("data-lexical-cursor", "true"));
                        var r = e.blockCursor;
                        if (void 0 !== r) {
                          var _n$classList;
                          if ("string" == typeof r) {
                            var _t130 = sl(r);
                            r = e.blockCursor = _t130;
                          }
                          void 0 !== r &&
                            (_n$classList = n.classList).add.apply(
                              _n$classList,
                              r,
                            );
                        }
                        return n;
                      })(t._config)),
                  (e.style.caretColor = "transparent"),
                  void (null === _a8
                    ? _n62.appendChild(r)
                    : _n62.insertBefore(r, _a8))
                );
              }
            }
            null !== r && Hi(r, t, e);
          })(t, r, l);
        } finally {
          (null !== h && h.observe(r, Ur), (Br = f), (Kr = c));
        }
      }
      (null !== g &&
        (function (t, e, n, r, o) {
          var i = Array.from(t._listeners.mutation),
            s = i.length;
          for (var _t131 = 0; _t131 < s; _t131++) {
            var _i$_t = i[_t131],
              _s11 = _i$_t[0],
              _l0 = _i$_t[1];
            for (var _t132 of _l0) {
              var _i20 = e.get(_t132);
              void 0 !== _i20 &&
                _s11(_i20, {
                  dirtyLeaves: r,
                  prevEditorState: o,
                  updateTags: n,
                });
            }
          }
        })(t, g, m, _, i),
        ur(l) ||
          null === l ||
          (null !== s && s.is(l)) ||
          t.dispatchCommand(Yt, void 0));
      var S = t._pendingDecorators;
      (null !== S &&
        ((t._decorators = S),
        (t._pendingDecorators = null),
        ro("decorator", t, !0, S)),
        (function (t, e, n) {
          var r = li(e),
            o = li(n);
          r !== o && ro("textcontent", t, !0, o);
        })(t, e || i, n),
        ro("update", t, !0, {
          dirtyElements: p,
          dirtyLeaves: _,
          editorState: n,
          mutatedNodes: g,
          normalizedNodes: y,
          prevEditorState: e || i,
          tags: m,
        }),
        (function (t, e) {
          if (((t._deferred = []), 0 !== e.length)) {
            var _n63 = t._updating;
            t._updating = !0;
            try {
              for (var _t133 = 0; _t133 < e.length; _t133++) e[_t133]();
            } finally {
              t._updating = _n63;
            }
          }
        })(t, x),
        (function (t) {
          var e = t._updates;
          if (0 !== e.length) {
            var _n64 = e.shift();
            if (_n64) {
              var _e83 = _n64[0],
                _r45 = _n64[1];
              so(t, _e83, _r45);
            }
          }
        })(t));
    }
    function ro(t, e, n) {
      var o = e._updating;
      e._updating = n;
      try {
        var _n65 = e._listeners[t],
          _o34 = Array.from(_n65);
        for (
          var _len4 = arguments.length,
            r = new Array(_len4 > 3 ? _len4 - 3 : 0),
            _key4 = 3;
          _key4 < _len4;
          _key4++
        ) {
          r[_key4 - 3] = arguments[_key4];
        }
        for (var _ref18 of _o34) {
          var _t134 = _ref18[0];
          var _e84 = _ref18[1];
          {
            _e84 && _e84();
            var _o35 = _t134.apply(void 0, r);
            _n65.has(_t134) ? _n65.set(_t134, _o35) : _o35 && _o35();
          }
        }
      } finally {
        e._updating = o;
      }
    }
    function oo(t, e, n, r) {
      var o = hi(t);
      var i;
      for (var _t135 = 4; _t135 >= 0; _t135--) {
        var _loop = function _loop() {
            var l = o[_s12];
            if (_s12 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var a = l._commands.get(e);
            if (void 0 !== a) {
              var _e85 = a[_t135];
              if (void 0 !== _e85) {
                var _t136 = Array.from(_e85),
                  _o36 = _t136.length;
                var _i21 = !1;
                if (
                  (lo(l, function () {
                    for (var _e86 = 0; _e86 < _o36; _e86++)
                      if (_t136[_e86](n, r)) return void (_i21 = !0);
                  }),
                  _i21)
                )
                  return { v: _i21 };
              }
            }
          },
          _ret;
        for (var _s12 = 0; _s12 < o.length; _s12++) {
          _ret = _loop();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      return (
        i &&
          i.update(function () {
            oo(i, e, n, r);
          }),
        !1
      );
    }
    function io(e, n) {
      var r = e._updates;
      var o = n || !1;
      for (; 0 !== r.length; ) {
        var _n66 = r.shift();
        if (_n66) {
          var _r46 = _n66[0],
            _i22 = _n66[1],
            _s13 = e._pendingEditorState;
          var _l1 = void 0;
          (void 0 !== _i22 &&
            ((_l1 = _i22.onUpdate),
            _i22.skipTransforms && (o = !0),
            _i22.discrete && (null === _s13 && t(191), (_s13._flushSync = !0)),
            _l1 && e._deferred.push(_l1),
            Zr(e, _i22.tag)),
            null == _s13 ? so(e, _r46, _i22) : _r46());
        }
      }
      return o;
    }
    function so(e, n, r) {
      var o = e._updateTags;
      var i,
        s = !1,
        l = !1;
      (void 0 !== r &&
        ((i = r.onUpdate),
        Zr(e, r.tag),
        (s = r.skipTransforms || !1),
        (l = r.discrete || !1)),
        i && e._deferred.push(i));
      var a = e._editorState;
      var c = e._pendingEditorState,
        u = !1;
      ((null === c || c._readOnly) &&
        ((c = e._pendingEditorState = mo(c || a)), (u = !0)),
        (c._flushSync = l));
      var f = Kr,
        d = zr,
        h = Br,
        g = e._updating;
      ((Kr = c), (zr = !1), (e._updating = !0), (Br = e));
      var _ = e._headless || null === e.getRootElement();
      Io(null);
      try {
        u &&
          (_
            ? null !== a._selection && (c._selection = a._selection.clone())
            : (c._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  r = Vi(Bi(t));
                return ur(n) || null == n ? kr(n, r, t, e) : n.clone();
              })(e, (r && r.event) || null)));
        var _o37 = e._compositionKey;
        (n(),
          (s = io(e, s)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              r = t._selection;
            if (ur(r)) {
              var _t137 = r.anchor,
                _e87 = r.focus;
              var _o38;
              if (
                ("text" === _t137.type &&
                  ((_o38 = _t137.getNode()), _o38.selectionTransform(n, r)),
                "text" === _e87.type)
              ) {
                var _t138 = _e87.getNode();
                _o38 !== _t138 && _t138.selectionTransform(n, r);
              }
            }
          })(c, e),
          0 !== e._dirtyType &&
            (s
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = t._nodeMap;
                  for (var _t139 of n) {
                    var _e88 = r.get(_t139);
                    tr(_e88) &&
                      _e88.isAttached() &&
                      _e88.isSimpleText() &&
                      !_e88.isUnmergeable() &&
                      lt(_e88);
                  }
                })(c, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = e._dirtyElements,
                    o = t._nodeMap,
                    i = ei(),
                    s = new Map();
                  var l = n,
                    a = l.size,
                    c = r,
                    u = c.size;
                  for (; a > 0 || u > 0; ) {
                    if (a > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t140 of l) {
                        var _r47 = o.get(_t140);
                        (tr(_r47) &&
                          _r47.isAttached() &&
                          _r47.isSimpleText() &&
                          !_r47.isUnmergeable() &&
                          lt(_r47),
                          void 0 !== _r47 && Qr(_r47, i) && Xr(e, _r47, s),
                          n.add(_t140));
                      }
                      if (((l = e._dirtyLeaves), (a = l.size), a > 0)) {
                        $r++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      c["delete"]("root") && c.set("root", !0));
                    for (var _t141 of c) {
                      var _n67 = _t141[0],
                        _l10 = _t141[1];
                      if ((r.set(_n67, _l10), !_l10)) continue;
                      var _a9 = o.get(_n67);
                      void 0 !== _a9 && Qr(_a9, i) && Xr(e, _a9, s);
                    }
                    ((l = e._dirtyLeaves),
                      (a = l.size),
                      (c = e._dirtyElements),
                      (u = c.size),
                      $r++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = r));
                })(c, e),
            io(e),
            (function (t, e, n, r) {
              var o = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref20 of r) {
                var _t142 = _ref20[0];
                {
                  var _e89 = i.get(_t142);
                  void 0 !== _e89 &&
                    (_e89.isAttached() ||
                      (fo(_e89) && R(_e89, _t142, o, i, s, r),
                      o.has(_t142) || r["delete"](_t142),
                      s.push(_t142)));
                }
              }
              for (var _t143 of s) i["delete"](_t143);
              for (var _t144 of n) {
                var _e90 = i.get(_t144);
                void 0 === _e90 ||
                  _e90.isAttached() ||
                  (o.has(_t144) || n["delete"](_t144), i["delete"](_t144));
              }
            })(a, c, e._dirtyLeaves, e._dirtyElements)));
        _o37 !== e._compositionKey && (c._flushSync = !0);
        var _i23 = c._selection;
        if (ur(_i23)) {
          var _e91 = c._nodeMap,
            _n68 = _i23.anchor.key,
            _r48 = _i23.focus.key;
          (void 0 !== _e91.get(_n68) && void 0 !== _e91.get(_r48)) || t(19);
        } else dr(_i23) && 0 === _i23._nodes.size && (c._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = a),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void no(e)
        );
      } finally {
        ((Kr = f), (zr = d), (Br = h), (e._updating = g), ($r = 0));
      }
      var p =
        0 !== e._dirtyType ||
        e._deferred.length > 0 ||
        (function (t, e) {
          var n = e.getEditorState()._selection,
            r = t._selection;
          if (null !== r) {
            if (r.dirty || !r.is(n)) return !0;
          } else if (null !== n) return !0;
          return !1;
        })(c, e);
      p
        ? c._flushSync
          ? ((c._flushSync = !1), no(e))
          : u &&
            Ko(function () {
              no(e);
            })
        : ((c._flushSync = !1),
          u && (o.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function lo(t, e, n) {
      Br === t && void 0 === n ? e() : so(t, e, n);
    }
    var _ao = (function () {
      function ao(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto9 = ao.prototype;
      _proto9.withBefore = function withBefore(t) {
        return new ao(this.element, t, this.after);
      };
      _proto9.withAfter = function withAfter(t) {
        return new ao(this.element, this.before, t);
      };
      _proto9.withElement = function withElement(t) {
        return this.element === t ? this : new ao(t, this.before, this.after);
      };
      _proto9.insertChild = function insertChild(e) {
        var n = this.before || this.getManagedLineBreak();
        return (
          null !== n && n.parentElement !== this.element && t(222),
          this.element.insertBefore(e, n),
          this
        );
      };
      _proto9.removeChild = function removeChild(e) {
        return (
          e.parentElement !== this.element && t(223),
          this.element.removeChild(e),
          this
        );
      };
      _proto9.replaceChild = function replaceChild(e, n) {
        return (
          n.parentElement !== this.element && t(224),
          this.element.replaceChild(e, n),
          this
        );
      };
      _proto9.getFirstChild = function getFirstChild() {
        var t = this.after ? this.after.nextSibling : this.element.firstChild;
        return t === this.before || t === this.getManagedLineBreak() ? null : t;
      };
      _proto9.getManagedLineBreak = function getManagedLineBreak() {
        return this.element.__lexicalLineBreak || null;
      };
      _proto9.setManagedLineBreak = function setManagedLineBreak(t) {
        if (null === t) this.removeManagedLineBreak();
        else {
          var _e92 = "decorator" === t && (d || l || c);
          this.insertManagedLineBreak(_e92);
        }
      };
      _proto9.removeManagedLineBreak = function removeManagedLineBreak() {
        var t = this.getManagedLineBreak();
        if (t) {
          var _e93 = this.element,
            _n69 = "IMG" === t.nodeName ? t.nextSibling : null;
          (_n69 && _e93.removeChild(_n69),
            _e93.removeChild(t),
            (_e93.__lexicalLineBreak = void 0));
        }
      };
      _proto9.insertManagedLineBreak = function insertManagedLineBreak(t) {
        var e = this.getManagedLineBreak();
        if (e) {
          if (t === ("IMG" === e.nodeName)) return;
          this.removeManagedLineBreak();
        }
        var n = this.element,
          r = this.before,
          o = document.createElement("br");
        if ((n.insertBefore(o, r), t)) {
          var _t145 = document.createElement("img");
          (_t145.setAttribute("data-lexical-linebreak", "true"),
            (_t145.style.cssText =
              "display: inline !important; border: 0px !important; margin: 0px !important;"),
            (_t145.alt = ""),
            n.insertBefore(_t145, o),
            (n.__lexicalLineBreak = _t145));
        } else n.__lexicalLineBreak = o;
      };
      _proto9.getFirstChildOffset = function getFirstChildOffset() {
        var t = 0;
        for (var _e94 = this.after; null !== _e94; _e94 = _e94.previousSibling)
          t++;
        return t;
      };
      _proto9.resolveChildIndex = function resolveChildIndex(t, e, n, r) {
        if (n === this.element) {
          var _e95 = this.getFirstChildOffset();
          return [t, Math.min(_e95 + t.getChildrenSize(), Math.max(_e95, r))];
        }
        var o = co(e, n);
        o.push(r);
        var i = co(e, this.element);
        var s = t.getIndexWithinParent();
        for (var _t146 = 0; _t146 < i.length; _t146++) {
          var _e96 = o[_t146],
            _n70 = i[_t146];
          if (void 0 === _e96 || _e96 < _n70) break;
          if (_e96 > _n70) {
            s += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), s];
      };
      return ao;
    })();
    function co(e, n) {
      var r = [];
      var o = n;
      for (; o !== e && null !== o; o = o.parentNode) {
        var _t147 = 0;
        for (
          var _e97 = o.previousSibling;
          null !== _e97;
          _e97 = _e97.previousSibling
        )
          _t147++;
        r.push(_t147);
      }
      return (o !== e && t(225), r.reverse());
    }
    var _uo4 = (function (_kn3) {
      function uo(t) {
        var _this3;
        ((_this3 = _kn3.call(this, t) || this),
          (_this3.__first = null),
          (_this3.__last = null),
          (_this3.__size = 0),
          (_this3.__format = 0),
          (_this3.__style = ""),
          (_this3.__indent = 0),
          (_this3.__dir = null),
          (_this3.__textFormat = 0),
          (_this3.__textStyle = ""));
        return _this3;
      }
      babelHelpers.inheritsLoose(uo, _kn3);
      var _proto0 = uo.prototype;
      _proto0.afterCloneFrom = function afterCloneFrom(t) {
        (_kn3.prototype.afterCloneFrom.call(this, t),
          this.__key === t.__key &&
            ((this.__first = t.__first),
            (this.__last = t.__last),
            (this.__size = t.__size)),
          (this.__indent = t.__indent),
          (this.__format = t.__format),
          (this.__style = t.__style),
          (this.__dir = t.__dir),
          (this.__textFormat = t.__textFormat),
          (this.__textStyle = t.__textStyle));
      };
      _proto0.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto0.getFormatType = function getFormatType() {
        var t = this.getFormat();
        return P[t] || "";
      };
      _proto0.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto0.getIndent = function getIndent() {
        return this.getLatest().__indent;
      };
      _proto0.getChildren = function getChildren() {
        var t = [];
        var e = this.getFirstChild();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto0.getChildrenKeys = function getChildrenKeys() {
        var t = [];
        var e = this.getFirstChild();
        for (; null !== e; ) (t.push(e.__key), (e = e.getNextSibling()));
        return t;
      };
      _proto0.getChildrenSize = function getChildrenSize() {
        return this.getLatest().__size;
      };
      _proto0.isEmpty = function isEmpty() {
        return 0 === this.getChildrenSize();
      };
      _proto0.isDirty = function isDirty() {
        var t = Vr()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto0.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto0.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((tr(e) && t.push(e), fo(e))) {
            var _n71 = e.getAllTextNodes();
            t.push.apply(t, _n71);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto0.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; fo(t); ) {
          var _e98 = t.getFirstChild();
          if (null === _e98) break;
          t = _e98;
        }
        return t;
      };
      _proto0.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; fo(t); ) {
          var _e99 = t.getLastChild();
          if (null === _e99) break;
          t = _e99;
        }
        return t;
      };
      _proto0.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t148 = e[n - 1];
          return (fo(_t148) && _t148.getLastDescendant()) || _t148 || null;
        }
        var r = e[t];
        return (fo(r) && r.getFirstDescendant()) || r || null;
      };
      _proto0.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : ni(t);
      };
      _proto0.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto0.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : ni(t);
      };
      _proto0.getLastChildOrThrow = function getLastChildOrThrow() {
        var e = this.getLastChild();
        return (null === e && t(96, this.__key), e);
      };
      _proto0.getChildAtIndex = function getChildAtIndex(t) {
        var e = this.getChildrenSize();
        var n, r;
        if (t < e / 2) {
          for (n = this.getFirstChild(), r = 0; null !== n && r <= t; ) {
            if (r === t) return n;
            ((n = n.getNextSibling()), r++);
          }
          return null;
        }
        for (n = this.getLastChild(), r = e - 1; null !== n && r >= t; ) {
          if (r === t) return n;
          ((n = n.getPreviousSibling()), r--);
        }
        return null;
      };
      _proto0.getTextContent = function getTextContent() {
        var t = "";
        var e = this.getChildren(),
          n = e.length;
        for (var _r49 = 0; _r49 < n; _r49++) {
          var _o39 = e[_r49];
          ((t += _o39.getTextContent()),
            fo(_o39) && _r49 !== n - 1 && !_o39.isInline() && (t += v));
        }
        return t;
      };
      _proto0.getTextContentSize = function getTextContentSize() {
        var t = 0;
        var e = this.getChildren(),
          n = e.length;
        for (var _r50 = 0; _r50 < n; _r50++) {
          var _o40 = e[_r50];
          ((t += _o40.getTextContentSize()),
            fo(_o40) && _r50 !== n - 1 && !_o40.isInline() && (t += 2));
        }
        return t;
      };
      _proto0.getDirection = function getDirection() {
        return this.getLatest().__dir;
      };
      _proto0.getTextFormat = function getTextFormat() {
        return this.getLatest().__textFormat;
      };
      _proto0.hasFormat = function hasFormat(t) {
        if ("" !== t) {
          var _e100 = D[t];
          return 0 !== (this.getFormat() & _e100);
        }
        return !1;
      };
      _proto0.hasTextFormat = function hasTextFormat(t) {
        var e = A[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto0.getFormatFlags = function getFormatFlags(t, e) {
        return qo(this.getLatest().__textFormat, t, e);
      };
      _proto0.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto0.select = function select(t, e) {
        Yr();
        var n = Er();
        var r = t,
          o = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t149 = this.getFirstChild();
            if (tr(_t149) || fo(_t149)) return _t149.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t150 = this.getLastChild();
            if (tr(_t150) || fo(_t150)) return _t150.select();
          }
        (void 0 === r && (r = i), void 0 === o && (o = i));
        var s = this.__key;
        return ur(n)
          ? (n.anchor.set(s, r, "element"),
            n.focus.set(s, o, "element"),
            (n.dirty = !0),
            n)
          : Nr(s, r, s, o, "element", "element");
      };
      _proto0.selectStart = function selectStart() {
        var t = this.getFirstDescendant();
        return t ? t.selectStart() : this.select();
      };
      _proto0.selectEnd = function selectEnd() {
        var t = this.getLastDescendant();
        return t ? t.selectEnd() : this.select();
      };
      _proto0.clear = function clear() {
        var t = this.getWritable();
        return (
          this.getChildren().forEach(function (t) {
            return t.remove();
          }),
          t
        );
      };
      _proto0.append = function append() {
        for (
          var _len5 = arguments.length, t = new Array(_len5), _key5 = 0;
          _key5 < _len5;
          _key5++
        ) {
          t[_key5] = arguments[_key5];
        }
        return this.splice(this.getChildrenSize(), 0, t);
      };
      _proto0.setDirection = function setDirection(t) {
        var e = this.getWritable();
        return ((e.__dir = t), e);
      };
      _proto0.setFormat = function setFormat(t) {
        return ((this.getWritable().__format = "" !== t ? D[t] : 0), this);
      };
      _proto0.setStyle = function setStyle(t) {
        return ((this.getWritable().__style = t || ""), this);
      };
      _proto0.setTextFormat = function setTextFormat(t) {
        var e = this.getWritable();
        return ((e.__textFormat = t), e);
      };
      _proto0.setTextStyle = function setTextStyle(t) {
        var e = this.getWritable();
        return ((e.__textStyle = t), e);
      };
      _proto0.setIndent = function setIndent(t) {
        return ((this.getWritable().__indent = t), this);
      };
      _proto0.splice = function splice(e, n, r) {
        vn(this) && t(324, this.__key, this.__type);
        var o = this.getChildrenSize(),
          i = this.getWritable();
        e + n <= o || t(226, String(e), String(n), String(o));
        var s = i.__key,
          l = [],
          a = [],
          c = this.getChildAtIndex(e + n);
        var u = null,
          f = o - n + r.length;
        if (0 !== e)
          if (e === o) u = this.getLastChild();
          else {
            var _t151 = this.getChildAtIndex(e);
            null !== _t151 && (u = _t151.getPreviousSibling());
          }
        if (n > 0) {
          var _e101 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _r51 = 0; _r51 < n; _r51++) {
            null === _e101 && t(100);
            var _n72 = _e101.getNextSibling(),
              _r52 = _e101.__key;
            (Qo(_e101.getWritable()), a.push(_r52), (_e101 = _n72));
          }
        }
        var d = u;
        for (var _e102 of r) {
          null !== d && _e102.is(d) && (u = d = d.getPreviousSibling());
          var _n73 = _e102.getWritable();
          (_n73.__parent === s && f--, Qo(_n73));
          var _r53 = _e102.__key;
          if (null === d) ((i.__first = _r53), (_n73.__prev = null));
          else {
            var _t152 = d.getWritable();
            ((_t152.__next = _r53), (_n73.__prev = _t152.__key));
          }
          (_e102.__key === s && t(76),
            (_n73.__parent = s),
            l.push(_r53),
            (d = _e102));
        }
        if (e + n === o) {
          if (null !== d) {
            ((d.getWritable().__next = null), (i.__last = d.__key));
          }
        } else if (null !== c) {
          var _t153 = c.getWritable();
          if (null !== d) {
            var _e103 = d.getWritable();
            ((_t153.__prev = d.__key), (_e103.__next = c.__key));
          } else _t153.__prev = null;
        }
        if (((i.__size = f), a.length)) {
          var _t154 = Er();
          if (ur(_t154)) {
            var _e104 = new Set(a),
              _n74 = new Set(l),
              _r54 = _t154.anchor,
              _o41 = _t154.focus;
            (ho(_r54, _e104, _n74) && Ar(_r54, _r54.getNode(), this, u, c),
              ho(_o41, _e104, _n74) && Ar(_o41, _o41.getNode(), this, u, c),
              0 !== f || this.canBeEmpty() || Wi(this) || this.remove());
          }
        }
        return i;
      };
      _proto0.getDOMSlot = function getDOMSlot(t) {
        return new _ao(t);
      };
      _proto0.exportDOM = function exportDOM(t) {
        var _kn3$prototype$export = _kn3.prototype.exportDOM.call(this, t),
          e = _kn3$prototype$export.element;
        if (qi(e)) {
          var _t155 = this.getIndent();
          _t155 > 0 && (e.style.paddingInlineStart = 40 * _t155 + "px");
          var _n75 = this.getDirection();
          _n75 && (e.dir = _n75);
        }
        return { element: e };
      };
      _proto0.exportJSON = function exportJSON() {
        var t = babelHelpers["extends"](
            {
              children: [],
              direction: this.getDirection(),
              format: this.getFormatType(),
              indent: this.getIndent(),
            },
            _kn3.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            Wi(this) ||
            this.getChildren().some(tr) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto0.updateFromJSON = function updateFromJSON(t) {
        return _kn3.prototype.updateFromJSON
          .call(this, t)
          .setFormat(t.format)
          .setIndent(t.indent)
          .setDirection(t.direction)
          .setTextFormat(t.textFormat || 0)
          .setTextStyle(t.textStyle || "");
      };
      _proto0.insertNewAfter = function insertNewAfter(t, e) {
        return null;
      };
      _proto0.canIndent = function canIndent() {
        return !0;
      };
      _proto0.collapseAtStart = function collapseAtStart(t) {
        return !1;
      };
      _proto0.excludeFromCopy = function excludeFromCopy(t) {
        return !1;
      };
      _proto0.canReplaceWith = function canReplaceWith(t) {
        return !0;
      };
      _proto0.canInsertAfter = function canInsertAfter(t) {
        return !0;
      };
      _proto0.canBeEmpty = function canBeEmpty() {
        return !0;
      };
      _proto0.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto0.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto0.isInline = function isInline() {
        return !1;
      };
      _proto0.isShadowRoot = function isShadowRoot() {
        return !1;
      };
      _proto0.canMergeWith = function canMergeWith(t) {
        return !1;
      };
      _proto0.extractWithChild = function extractWithChild(t, e, n) {
        return !1;
      };
      _proto0.canMergeWhenEmpty = function canMergeWhenEmpty() {
        return !1;
      };
      _proto0.reconcileObservedMutation = function reconcileObservedMutation(
        t,
        e,
      ) {
        var n = this.getDOMSlot(t);
        var r = n.getFirstChild();
        for (
          var _t156 = this.getFirstChild();
          _t156;
          _t156 = _t156.getNextSibling()
        ) {
          var _o42 = e.getElementByKey(_t156.getKey());
          null !== _o42 &&
            (null == r
              ? (n.insertChild(_o42), (r = _o42))
              : r !== _o42 && n.replaceChild(_o42, r),
            (r = r.nextSibling));
        }
      };
      return uo;
    })(_kn5);
    function fo(t) {
      return t instanceof _uo4;
    }
    function ho(t, e, n) {
      var r = t.getNode();
      for (; r; ) {
        var _t157 = r.__key;
        if (e.has(_t157) && !n.has(_t157)) return !0;
        r = r.getParent();
      }
      return !1;
    }
    var _go = (function (_kn4) {
      function go() {
        return _kn4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(go, _kn4);
      var _proto1 = go.prototype;
      _proto1.decorate = function decorate(t, e) {
        return null;
      };
      _proto1.isIsolated = function isIsolated() {
        return !1;
      };
      _proto1.isInline = function isInline() {
        return !0;
      };
      _proto1.isKeyboardSelectable = function isKeyboardSelectable() {
        return !0;
      };
      return go;
    })(_kn5);
    function _o(t) {
      return t instanceof _go;
    }
    var _po = (function (_uo) {
      function po() {
        var _this4;
        ((_this4 = _uo.call(this, "root") || this),
          (_this4.__cachedText = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(po, _uo);
      po.getType = function getType() {
        return "root";
      };
      po.clone = function clone() {
        return new po();
      };
      var _proto10 = po.prototype;
      _proto10.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto10.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return (!Jr() && 0 !== Vr()._dirtyType) || null === t
          ? _uo.prototype.getTextContent.call(this)
          : t;
      };
      _proto10.remove = function remove() {
        t(52);
      };
      _proto10.replace = function replace(e) {
        t(53);
      };
      _proto10.insertBefore = function insertBefore(e) {
        t(54);
      };
      _proto10.insertAfter = function insertAfter(e) {
        t(55);
      };
      _proto10.updateDOM = function updateDOM(t, e) {
        return !1;
      };
      _proto10.splice = function splice(e, n, r) {
        for (var _e105 of r) fo(_e105) || _o(_e105) || t(282);
        return _uo.prototype.splice.call(this, e, n, r);
      };
      po.importJSON = function importJSON(t) {
        return ai().updateFromJSON(t);
      };
      _proto10.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return po;
    })(_uo4);
    function yo(t) {
      return t instanceof _po;
    }
    function mo(t) {
      return new _So(new Map(t._nodeMap));
    }
    function xo() {
      return new _So(new Map([["root", new _po()]]));
    }
    function Co(e) {
      var n = e.exportJSON(),
        r = e.constructor;
      if ((n.type !== r.getType() && t(130, r.name), fo(e))) {
        var _o43 = n.children;
        Array.isArray(_o43) || t(59, r.name);
        var _i24 = e.getChildren();
        for (var _t158 = 0; _t158 < _i24.length; _t158++) {
          var _e106 = Co(_i24[_t158]);
          _o43.push(_e106);
        }
      }
      return n;
    }
    var _So = (function () {
      function So(t, e) {
        ((this._nodeMap = t),
          (this._selection = e || null),
          (this._flushSync = !1),
          (this._readOnly = !1));
      }
      var _proto11 = So.prototype;
      _proto11.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto11.read = function read(t, e) {
        return eo((e && e.editor) || null, this, t);
      };
      _proto11.clone = function clone(t) {
        var e = new So(this._nodeMap, void 0 === t ? this._selection : t);
        return ((e._readOnly = !0), e);
      };
      _proto11.toJSON = function toJSON() {
        return eo(null, this, function () {
          return { root: Co(ai()) };
        });
      };
      return So;
    })();
    var _No = (function (_uo2) {
      function No() {
        return _uo2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(No, _uo2);
      No.getType = function getType() {
        return "artificial";
      };
      var _proto12 = No.prototype;
      _proto12.createDOM = function createDOM(t) {
        return document.createElement("div");
      };
      return No;
    })(_uo4);
    var _To = (function (_uo3) {
      function To() {
        return _uo3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(To, _uo3);
      To.getType = function getType() {
        return "paragraph";
      };
      To.clone = function clone(t) {
        return new To(t.__key);
      };
      var _proto13 = To.prototype;
      _proto13.createDOM = function createDOM(t) {
        var e = document.createElement("p"),
          n = Ei(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto13.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      To.importDOM = function importDOM() {
        return {
          p: function p(t) {
            return { conversion: vo, priority: 0 };
          },
        };
      };
      _proto13.exportDOM = function exportDOM(t) {
        var _uo3$prototype$export = _uo3.prototype.exportDOM.call(this, t),
          e = _uo3$prototype$export.element;
        if (qi(e)) {
          this.isEmpty() && e.append(document.createElement("br"));
          var _t159 = this.getFormatType();
          _t159 && (e.style.textAlign = _t159);
        }
        return { element: e };
      };
      To.importJSON = function importJSON(t) {
        return ko().updateFromJSON(t);
      };
      _proto13.exportJSON = function exportJSON() {
        var t = _uo3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e107 = this.getChildren().find(tr);
          _e107
            ? ((t.textFormat = _e107.getFormat()),
              (t.textStyle = _e107.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto13.insertNewAfter = function insertNewAfter(t, e) {
        var n = ko();
        (n.setTextFormat(t.format), n.setTextStyle(t.style));
        var r = this.getDirection();
        return (
          n.setDirection(r),
          n.setFormat(this.getFormatType()),
          n.setStyle(this.getStyle()),
          this.insertAfter(n, e),
          n
        );
      };
      _proto13.collapseAtStart = function collapseAtStart() {
        var t = this.getChildren();
        if (
          0 === t.length ||
          (tr(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return To;
    })(_uo4);
    function vo(t) {
      var e = ko();
      if (
        (t.style && (e.setFormat(t.style.textAlign), ls(t, e)),
        "" === e.getFormatType())
      ) {
        var _n76 = t.getAttribute("align");
        _n76 && _n76 && _n76 in D && e.setFormat(_n76);
      }
      return { node: e };
    }
    function ko() {
      return Ui(new _To());
    }
    function Eo(t) {
      return t instanceof _To;
    }
    var Oo = 0;
    function Mo(t, e, n, r) {
      var o = t._keyToDOMMap;
      (o.clear(),
        (t._editorState = xo()),
        (t._pendingEditorState = r),
        (t._compositionKey = null),
        (t._dirtyType = 0),
        t._cloneNotNeeded.clear(),
        (t._dirtyLeaves = new Set()),
        t._dirtyElements.clear(),
        (t._normalizedNodes = new Set()),
        (t._updateTags = new Set()),
        (t._updates = []),
        (t._blockCursorElement = null));
      var i = t._observer;
      (null !== i && (i.disconnect(), (t._observer = null)),
        null !== e && (e.textContent = ""),
        null !== n && ((n.textContent = ""), o.set("root", n)));
    }
    function bo(t) {
      var e = new Set(),
        n = new Set();
      var r = t;
      for (; r; ) {
        var _us3 = us(r),
          _t160 = _us3.ownNodeConfig,
          _o44 = r.transform;
        if (!n.has(_o44)) {
          n.add(_o44);
          var _t161 = r.transform();
          _t161 && e.add(_t161);
        }
        if (_t160) {
          var _n77 = _t160.$transform;
          (_n77 && e.add(_n77), (r = _t160["extends"]));
        } else {
          var _t162 = Object.getPrototypeOf(r);
          r =
            _t162.prototype instanceof _kn5 && _t162 !== _kn5 ? _t162 : void 0;
        }
      }
      return e;
    }
    function Ao(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function wo(t, e, n) {
      return (t.set(e, n), Ao.bind(null, t, e));
    }
    var _Do = (function () {
      function Do(t, e, n, r, o, i, s, l) {
        ((this._createEditorArgs = l),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._deferred = []),
          (this._keyToDOMMap = new Map()),
          (this._updates = []),
          (this._updating = !1),
          (this._listeners = {
            decorator: new Map(),
            editable: new Map(),
            mutation: new Map(),
            root: new Map(),
            textcontent: new Map(),
            update: new Map(),
          }),
          (this._commands = new Map()),
          (this._config = r),
          (this._nodes = n),
          (this._decorators = {}),
          (this._pendingDecorators = null),
          (this._dirtyType = 0),
          (this._cloneNotNeeded = new Set()),
          (this._dirtyLeaves = new Set()),
          (this._dirtyElements = new Map()),
          (this._normalizedNodes = new Set()),
          (this._updateTags = new Set()),
          (this._observer = null),
          (this._key = gi()),
          (this._onError = o),
          (this._htmlConversions = i),
          (this._editable = s),
          (this._headless = null !== e && e._headless),
          (this._window = null),
          (this._blockCursorElement = null));
      }
      var _proto14 = Do.prototype;
      _proto14.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto14.registerUpdateListener = function registerUpdateListener(t) {
        return wo(this._listeners.update, t);
      };
      _proto14.registerEditableListener = function registerEditableListener(t) {
        return wo(this._listeners.editable, t);
      };
      _proto14.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return wo(this._listeners.decorator, t);
      };
      _proto14.registerTextContentListener =
        function registerTextContentListener(t) {
          return wo(this._listeners.textcontent, t);
        };
      _proto14.registerRootListener = function registerRootListener(t) {
        var _this13 = this;
        var e = this._listeners.root;
        return ll(wo(e, t, t(this._rootElement, null) || void 0), function () {
          return (function (t, e, n) {
            var r = t.get(e);
            (r && r(), t.set(e, e.apply(void 0, n) || void 0));
          })(e, t, [null, _this13._rootElement]);
        });
      };
      _proto14.registerCommand = function registerCommand(e, n, r) {
        void 0 === r && t(35);
        var o = this._commands;
        o.has(e) ||
          o.set(e, [new Set(), new Set(), new Set(), new Set(), new Set()]);
        var i = o.get(e);
        void 0 === i && t(36, String(e));
        var s = i[r];
        return (
          s.add(n),
          function () {
            (s["delete"](n),
              i.every(function (t) {
                return 0 === t.size;
              }) && o["delete"](e));
          }
        );
      };
      _proto14.registerMutationListener = function registerMutationListener(
        t,
        e,
        n,
      ) {
        var r = this.resolveRegisteredNodeAfterReplacements(
            this.getRegisteredNode(t),
          ).klass,
          o = this._listeners.mutation;
        var i = o.get(e);
        (void 0 === i && ((i = new Set()), o.set(e, i)), i.add(r));
        var s = n && n.skipInitialization;
        return (
          (void 0 !== s && s) || this.initializeMutationListener(e, r),
          function () {
            (i["delete"](r), 0 === i.size && o["delete"](e));
          }
        );
      };
      _proto14.getRegisteredNode = function getRegisteredNode(e) {
        var n = this._nodes.get(e.getType());
        return (void 0 === n && t(37, e.name), n);
      };
      _proto14.resolveRegisteredNodeAfterReplacements =
        function resolveRegisteredNodeAfterReplacements(t) {
          for (; t.replaceWithKlass; )
            t = this.getRegisteredNode(t.replaceWithKlass);
          return t;
        };
      _proto14.initializeMutationListener = function initializeMutationListener(
        t,
        e,
      ) {
        var n = this._editorState,
          r = is(n).get(e.getType());
        if (!r) return;
        var o = new Map();
        for (var _t163 of r.keys()) o.set(_t163, "created");
        o.size > 0 &&
          t(o, {
            dirtyLeaves: new Set(),
            prevEditorState: n,
            updateTags: new Set(["registerMutationListener"]),
          });
      };
      _proto14.registerNodeTransformToKlass =
        function registerNodeTransformToKlass(t, e) {
          var n = this.getRegisteredNode(t);
          return (n.transforms.add(e), n);
        };
      _proto14.registerNodeTransform = function registerNodeTransform(t, e) {
        var n = this.registerNodeTransformToKlass(t, e),
          r = [n],
          o = n.replaceWithKlass;
        if (null != o) {
          var _t164 = this.registerNodeTransformToKlass(o, e);
          r.push(_t164);
        }
        return (
          (function (t, e) {
            var n = is(t.getEditorState()),
              r = [];
            for (var _t165 of e) {
              var _e108 = n.get(_t165);
              _e108 && r.push(_e108);
            }
            if (0 === r.length) return;
            t.update(
              function () {
                for (var _t166 of r)
                  for (var _e109 of _t166.keys()) {
                    var _t167 = ni(_e109);
                    _t167 && _t167.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: En } : void 0,
            );
          })(
            this,
            r.map(function (t) {
              return t.klass.getType();
            }),
          ),
          function () {
            r.forEach(function (t) {
              return t.transforms["delete"](e);
            });
          }
        );
      };
      _proto14.hasNode = function hasNode(t) {
        return this._nodes.has(t.getType());
      };
      _proto14.hasNodes = function hasNodes(t) {
        return t.every(this.hasNode.bind(this));
      };
      _proto14.dispatchCommand = function dispatchCommand(t, e) {
        return wi(this, t, e);
      };
      _proto14.getDecorators = function getDecorators() {
        return this._decorators;
      };
      _proto14.getRootElement = function getRootElement() {
        return this._rootElement;
      };
      _proto14.getKey = function getKey() {
        return this._key;
      };
      _proto14.setRootElement = function setRootElement(t) {
        var e = this._rootElement;
        if (t !== e) {
          var _e$classList3;
          var _n78 = Ei(this._config.theme, "root"),
            _r55 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            Mo(this, e, t, _r55),
            null !== e &&
              (this._config.disableEvents || Sn(e),
              null != _n78 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n78,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e110 = Ki(t),
              _r56 = t.style;
            ((_r56.userSelect = "text"),
              (_r56.whiteSpace = "pre-wrap"),
              (_r56.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e110),
              (this._dirtyType = 2),
              H(this),
              this._updateTags.add(En),
              no(this),
              this._config.disableEvents ||
                (function (t, e, _He$get) {
                  var n = t.ownerDocument;
                  je.set(t, n);
                  var r = (_He$get = He.get(n)) != null ? _He$get : 0;
                  (r < 1 && n.addEventListener("selectionchange", yn),
                    He.set(n, r + 1),
                    (t.__lexicalEditor = e));
                  var o = _n(t);
                  var _loop2 = function _loop2() {
                    var _We$_n = We[_n79],
                      r = _We$_n[0],
                      i = _We$_n[1],
                      s =
                        "function" == typeof i
                          ? function (t) {
                              xn(t) ||
                                (mn(t),
                                (e.isEditable() || "click" === r) && i(t, e));
                            }
                          : function (t) {
                              if (xn(t)) return;
                              mn(t);
                              var n = e.isEditable();
                              switch (r) {
                                case "cut":
                                  return n && wi(e, we, t);
                                case "copy":
                                  return wi(e, Ae, t);
                                case "paste":
                                  return n && wi(e, ne, t);
                                case "dragstart":
                                  return n && wi(e, Oe, t);
                                case "dragover":
                                  return n && wi(e, Me, t);
                                case "dragend":
                                  return n && wi(e, be, t);
                                case "focus":
                                  return n && wi(e, Re, t);
                                case "blur":
                                  return n && wi(e, Ke, t);
                                case "drop":
                                  return n && wi(e, ke, t);
                              }
                            };
                    (t.addEventListener(r, s),
                      o.push(function () {
                        t.removeEventListener(r, s);
                      }));
                  };
                  for (var _n79 = 0; _n79 < We.length; _n79++) {
                    _loop2();
                  }
                })(t, this),
              null != _n78 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n78));
          } else ((this._window = null), this._updateTags.add(En), no(this));
          ro("root", this, !1, t, e);
        }
      };
      _proto14.getElementByKey = function getElementByKey(t) {
        return this._keyToDOMMap.get(t) || null;
      };
      _proto14.getEditorState = function getEditorState() {
        return this._editorState;
      };
      _proto14.setEditorState = function setEditorState(e, n) {
        e.isEmpty() && t(38);
        var r = e;
        (r._readOnly &&
          ((r = mo(e)),
          (r._selection = e._selection ? e._selection.clone() : null)),
          j(this));
        var o = this._pendingEditorState,
          i = this._updateTags,
          s = void 0 !== n ? n.tag : null;
        (null === o || o.isEmpty() || (null != s && i.add(s), no(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          null != s && i.add(s),
          this._updating || no(this));
      };
      _proto14.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var r = xo(),
            o = Kr,
            i = zr,
            s = Br,
            l = e._dirtyElements,
            a = e._dirtyLeaves,
            c = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (Kr = r),
            (zr = !1),
            (Br = e),
            Io(null));
          try {
            var _o45 = e._nodes;
            (to(t.root, _o45), n && n(), (r._readOnly = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = a),
              (e._cloneNotNeeded = c),
              (e._dirtyType = u),
              (Kr = o),
              (zr = i),
              (Br = s));
          }
          return r;
        })("string" == typeof t ? JSON.parse(t) : t, this, e);
      };
      _proto14.read = function read(t) {
        return (no(this), this.getEditorState().read(t, { editor: this }));
      };
      _proto14.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : so(t, e, n);
        })(this, t, e);
      };
      _proto14.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          lo(this, function () {
            var r = Er(),
              o = ai();
            (null !== r
              ? r.dirty || ui(r.clone())
              : 0 !== o.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? o.selectStart()
                  : o.selectEnd()),
              Fi("focus"),
              Li(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto14.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = Vi(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto14.isEditable = function isEditable() {
        return this._editable;
      };
      _proto14.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t), ro("editable", this, !0, t));
      };
      _proto14.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return Do;
    })();
    _Do.version = "0.43.0+prod.cjs";
    var Po = null;
    function Io(t) {
      Po = t;
    }
    var Fo = 1;
    function Lo(e, n) {
      var r = Ro(e, n);
      return (void 0 === r && t(30, n), r);
    }
    function Ro(t, e) {
      return t._nodes.get(e);
    }
    var Ko =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Bo(t) {
      return _o(ii(t));
    }
    function zo(t) {
      var e = document.activeElement;
      if (!qi(e)) return !1;
      var n = e.nodeName;
      return (
        _o(ii(t)) &&
        ("INPUT" === n ||
          "TEXTAREA" === n ||
          ("true" === e.contentEditable && null == Jo(e)))
      );
    }
    function Wo(t, e, n) {
      var r = t.getRootElement();
      try {
        return (
          null !== r &&
          r.contains(e) &&
          r.contains(n) &&
          null !== e &&
          !zo(e) &&
          Uo(e) === t
        );
      } catch (t) {
        return !1;
      }
    }
    function $o(t) {
      return t instanceof _Do;
    }
    function Uo(t) {
      var e = t;
      for (; null != e; ) {
        var _t168 = Jo(e);
        if ($o(_t168)) return _t168;
        e = Pi(e);
      }
      return null;
    }
    function Jo(t) {
      return t ? t.__lexicalEditor : null;
    }
    function Yo(t) {
      return or(t) || t.isToken();
    }
    function jo(t) {
      return Yo(t) || t.isSegmented();
    }
    function Ho(t) {
      return Xi(t) && 3 === t.nodeType;
    }
    function Vo(t) {
      return Xi(t) && 9 === t.nodeType;
    }
    function Go(t) {
      var e = t;
      for (; null != e; ) {
        if (Ho(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function qo(t, e, n) {
      var r = A[e];
      if (null !== n && (t & r) === (n & r)) return t;
      var o = t ^ r;
      return (
        "subscript" === e
          ? (o &= ~A.superscript)
          : "superscript" === e
            ? (o &= ~A.subscript)
            : "lowercase" === e
              ? ((o &= ~A.uppercase), (o &= ~A.capitalize))
              : "uppercase" === e
                ? ((o &= ~A.lowercase), (o &= ~A.capitalize))
                : "capitalize" === e &&
                  ((o &= ~A.lowercase), (o &= ~A.uppercase)),
        o
      );
    }
    function Xo(t, e) {
      var n = (function () {
        var t = Po;
        return ((Po = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (Yr(), jr());
      var r = Vr(),
        o = Hr(),
        i = "" + Fo++;
      (o._nodeMap.set(i, t),
        fo(t) ? r._dirtyElements.set(i, !0) : r._dirtyLeaves.add(i),
        r._cloneNotNeeded.add(i),
        (r._dirtyType = 1),
        (t.__key = i));
    }
    function Qo(t) {
      var e = t.getParent();
      if (null !== e) {
        var _n80 = t.getWritable(),
          _r57 = e.getWritable(),
          _o46 = t.getPreviousSibling(),
          _i25 = t.getNextSibling(),
          _s14 = null !== _i25 ? _i25.__key : null,
          _l11 = null !== _o46 ? _o46.__key : null,
          _a0 = null !== _o46 ? _o46.getWritable() : null,
          _c9 = null !== _i25 ? _i25.getWritable() : null;
        (null === _o46 && (_r57.__first = _s14),
          null === _i25 && (_r57.__last = _l11),
          null !== _a0 && (_a0.__next = _s14),
          null !== _c9 && (_c9.__prev = _l11),
          (_n80.__prev = null),
          (_n80.__next = null),
          (_n80.__parent = null),
          _r57.__size--);
      }
    }
    function Zo(e) {
      (jr(), vn(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        r = n.__parent,
        o = Hr(),
        i = Vr(),
        s = o._nodeMap,
        l = i._dirtyElements;
      null !== r &&
        (function (t, e, n) {
          var r = t;
          for (; null !== r; ) {
            if (n.has(r)) return;
            var _t169 = e.get(r);
            if (void 0 === _t169) break;
            (n.set(r, !1), (r = _t169.__parent));
          }
        })(r, s, l);
      var a = n.__key;
      ((i._dirtyType = 1), fo(e) ? l.set(a, !0) : i._dirtyLeaves.add(a));
    }
    function ti(t) {
      Yr();
      var e = Vr(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t170 = ni(n);
          null !== _t170 && _t170.getWritable();
        }
        if (null !== t) {
          var _e111 = ni(t);
          null !== _e111 && _e111.getWritable();
        }
      }
    }
    function ei() {
      if (Jr()) return null;
      return Vr()._compositionKey;
    }
    function ni(t, e) {
      var n = (e || Hr())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function ri(t, e) {
      var n = oi(t, Vr());
      return void 0 !== n ? ni(n, e) : null;
    }
    function oi(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function ii(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t171 = ri(n, e);
        if (null !== _t171) return _t171;
        n = Pi(n);
      }
      return null;
    }
    function si(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function li(t) {
      return t.read(function () {
        return ai().getTextContent();
      });
    }
    function ai() {
      return ci(Hr());
    }
    function ci(t) {
      return t._nodeMap.get("root");
    }
    function ui(t) {
      Yr();
      var e = Hr();
      (null !== t && ((t.dirty = !0), t.setCachedNodes(null)),
        (e._selection = t));
    }
    function fi(t) {
      var e = Vr(),
        n = (function (t, e) {
          var n = t;
          for (; null != n; ) {
            var _t172 = oi(n, e);
            if (void 0 !== _t172) return _t172;
            n = Pi(n);
          }
          return null;
        })(t, e);
      if (null === n) {
        return t === e.getRootElement() ? ni("root") : null;
      }
      return ni(n);
    }
    function di(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function hi(t) {
      var e = [];
      for (var _n81 = t; null !== _n81; _n81 = _n81._parentEditor) e.push(_n81);
      return e;
    }
    function gi() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function _i(t) {
      return Ho(t) ? t.nodeValue : null;
    }
    function pi(t, e, n) {
      var r = Vi(Bi(e));
      if (null === r) return;
      var o = r.anchorNode;
      var i = r.anchorOffset,
        s = r.focusOffset;
      if (null !== o) {
        var _e112 = _i(o);
        var _r58 = ii(o);
        if (null !== _e112 && tr(_r58)) {
          if ((_e112 === T || _e112 === k) && n) {
            var _t173 = n.length;
            ((_e112 = n), (i = _t173), (s = _t173));
          }
          null !== _e112 && yi(_r58, _e112, i, s, t);
        }
      }
    }
    function yi(t, e, n, r, o) {
      var i = t;
      if (i.isAttached() && (o || !i.isDirty())) {
        var _s15 = i.isComposing();
        var _a1 = e;
        if (
          (_s15 || o) &&
          (e.endsWith(T) && (_a1 = e.slice(0, -T.length)), o)
        ) {
          var _t174 = k;
          var _e113;
          for (; -1 !== (_e113 = _a1.indexOf(_t174)); )
            ((_a1 = _a1.slice(0, _e113) + _a1.slice(_e113 + _t174.length)),
              null !== n &&
                n > _e113 &&
                (n = Math.max(_e113, n - _t174.length)),
              null !== r &&
                r > _e113 &&
                (r = Math.max(_e113, r - _t174.length)));
        }
        var _u9 = i.getTextContent();
        if (o || _a1 !== _u9) {
          if ("" === _a1) {
            if ((ti(null), c || l || d)) i.remove();
            else {
              var _t175 = Vr();
              setTimeout(function () {
                _t175.update(function () {
                  i.isAttached() && i.remove();
                });
              }, 20);
            }
            return;
          }
          var _e114 = i.getParent(),
            _o47 = Or(),
            _u0 = i.getTextContentSize(),
            _f8 = ei(),
            _h4 = i.getKey();
          if (
            i.isToken() ||
            (null !== _f8 && _h4 === _f8 && !_s15) ||
            (ur(_o47) &&
              ((null !== _e114 &&
                !_e114.canInsertTextBefore() &&
                0 === _o47.anchor.offset) ||
                (_o47.anchor.key === t.__key &&
                  0 === _o47.anchor.offset &&
                  !i.canInsertTextBefore() &&
                  !_s15) ||
                (_o47.focus.key === t.__key &&
                  _o47.focus.offset === _u0 &&
                  !i.canInsertTextAfter() &&
                  !_s15)))
          )
            return void i.markDirty();
          var _g5 = Er();
          if (!ur(_g5) || null === n || null === r) return void mi(i, _a1, _g5);
          if ((_g5.setTextNodeRange(i, n, i, r), i.isSegmented())) {
            var _t176 = Zn(i.getTextContent());
            (i.replace(_t176), (i = _t176));
          }
          mi(i, _a1, _g5);
        }
      }
    }
    function mi(t, e, n) {
      if ((t.setTextContent(e), ur(n))) {
        var _e115 = t.getKey();
        for (var _r59 of ["anchor", "focus"]) {
          var _o48 = n[_r59];
          "text" === _o48.type &&
            _o48.key === _e115 &&
            (_o48.offset = Ms(t, _o48.offset, "clamp"));
        }
      }
    }
    function xi(t, e, n) {
      var r = e[n] || !1;
      return "any" === r || r === t[n];
    }
    function Ci(t, e) {
      return (
        xi(t, e, "altKey") &&
        xi(t, e, "ctrlKey") &&
        xi(t, e, "shiftKey") &&
        xi(t, e, "metaKey")
      );
    }
    function Si(t, e, n) {
      if (!Ci(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      var r = "Key" + e.toUpperCase();
      return t.code === r;
    }
    var Ni = { ctrlKey: !o, metaKey: o },
      Ti = { altKey: o, ctrlKey: !o };
    function vi(t) {
      return "Backspace" === t.key;
    }
    function ki(t) {
      return Si(t, "a", Ni);
    }
    function Ei(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        r = n[e];
      if (void 0 !== r) return r;
      var o = t[e];
      if ("string" == typeof o) {
        var _t177 = sl(o);
        return ((n[e] = _t177), _t177);
      }
      return o;
    }
    function Oi(e, n, r, o, i) {
      if (0 === r.size) return;
      var s = o.__type,
        l = o.__key,
        a = n.get(s);
      void 0 === a && t(33, s);
      var c = a.klass;
      var u = e.get(c);
      void 0 === u && ((u = new Map()), e.set(c, u));
      var f = u.get(l),
        d = "destroyed" === f && "created" === i;
      (void 0 === f || d) && u.set(l, d ? "updated" : i);
    }
    function Mi(t, e, n) {
      var r = t.getParent();
      var o = n,
        i = t;
      return (
        null !== r &&
          (e && 0 === n
            ? ((o = i.getIndexWithinParent()), (i = r))
            : e ||
              n !== i.getChildrenSize() ||
              ((o = i.getIndexWithinParent() + 1), (i = r))),
        i.getChildAtIndex(e ? o - 1 : o)
      );
    }
    function bi(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return Mi(t.getNode(), e, n);
      }
      {
        var _r60 = t.getNode();
        if ((e && 0 === n) || (!e && n === _r60.getTextContentSize())) {
          var _t178 = e ? _r60.getPreviousSibling() : _r60.getNextSibling();
          return null === _t178
            ? Mi(
                _r60.getParentOrThrow(),
                e,
                _r60.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t178;
        }
      }
      return null;
    }
    function Ai(t) {
      var e = Bi(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function wi(t, e, n) {
      return oo(t, e, n, t);
    }
    function Di(e, n) {
      var r = e._keyToDOMMap.get(n);
      return (void 0 === r && t(75, n), r);
    }
    function Pi(t) {
      var e = t.assignedSlot || t.parentElement;
      return Qi(e) ? e.host : e;
    }
    function Ii(t) {
      return Vo(t) ? t : qi(t) ? t.ownerDocument : null;
    }
    function Fi(t) {
      Yr();
      Vr()._updateTags.add(t);
    }
    function Li(t) {
      Yr();
      Vr()._deferred.push(t);
    }
    function Ri(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function Ki(t) {
      var e = Ii(t);
      return e ? e.defaultView : null;
    }
    function Bi(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function zi(t) {
      var e = t.getParentOrThrow();
      for (; null !== e; ) {
        if (Wi(e)) return e;
        e = e.getParentOrThrow();
      }
      return e;
    }
    function Wi(t) {
      return yo(t) || (fo(t) && t.isShadowRoot());
    }
    function $i(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t);
      return (
        Xo(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function Ui(e) {
      var n = Vr(),
        r = e.getType(),
        o = Ro(n, r);
      void 0 === o && t(200, e.constructor.name, r);
      var i = o.replace,
        s = o.replaceWithKlass;
      if (null !== i) {
        var _n82 = i(e),
          _o49 = _n82.constructor;
        return (
          null !== s
            ? _n82 instanceof s ||
              t(
                201,
                s.name,
                s.getType(),
                _o49.name,
                _o49.getType(),
                e.constructor.name,
                r,
              )
            : (_n82 instanceof e.constructor && _o49 !== e.constructor) ||
              t(202, _o49.name, _o49.getType(), e.constructor.name, r),
          _n82.__key === e.__key &&
            t(203, e.constructor.name, r, _o49.name, _o49.getType()),
          _n82
        );
      }
      return e;
    }
    function Ji(e, n) {
      !yo(e.getParent()) || fo(n) || _o(n) || t(99);
    }
    function Yi(e) {
      var n = ni(e);
      return (null === n && t(63, e), n);
    }
    function ji(t) {
      return (_o(t) || (fo(t) && !t.canBeEmpty())) && !t.isInline();
    }
    function Hi(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var r = t.parentElement;
      null !== r && r.removeChild(t);
    }
    function Vi(t) {
      return n ? (t || window).getSelection() : null;
    }
    function Gi(t) {
      var e = Ki(t);
      return e ? e.getSelection() : null;
    }
    function qi(t) {
      return Xi(t) && 1 === t.nodeType;
    }
    function Xi(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function Qi(t) {
      return Xi(t) && 11 === t.nodeType;
    }
    function Zi(t) {
      var e = new RegExp(
        /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/,
        "i",
      );
      return null !== t.nodeName.match(e);
    }
    function ts(t) {
      var e = new RegExp(
        /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/,
        "i",
      );
      return null !== t.nodeName.match(e);
    }
    function es(t) {
      if (_o(t) && !t.isInline()) return !0;
      if (!fo(t) || Wi(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || Ln(e) || tr(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function ns() {
      return Vr();
    }
    var rs = new WeakMap(),
      os = new Map();
    function is(e) {
      if (!e._readOnly && e.isEmpty()) return os;
      e._readOnly || t(192);
      var n = rs.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref22 of t._nodeMap) {
              var _n83 = _ref22[0];
              var _r61 = _ref22[1];
              {
                var _t179 = _r61.__type;
                var _o50 = e.get(_t179);
                (_o50 || ((_o50 = new Map()), e.set(_t179, _o50)),
                  _o50.set(_n83, _r61));
              }
            }
            return e;
          })(e)),
          rs.set(e, n)),
        n
      );
    }
    function ss(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function ls(t, e) {
      var n = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(n / 40);
      e.setIndent(r);
    }
    function as(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function cs(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _kn5[e]
      );
    }
    function us(e) {
      var n = L in e.prototype ? e.prototype[L]() : void 0,
        r = (function (e) {
          if (!(e === _kn5 || e.prototype instanceof _kn5)) {
            var _n84 = "<unknown>",
              _r62 = "<unknown>";
            try {
              _n84 = e.getType();
            } catch (t) {}
            try {
              _Do.version && (_r62 = JSON.parse(_Do.version));
            } catch (t) {}
            t(290, e.name, _n84, _r62);
          }
          return e === _go || e === _uo4 || e === _kn5;
        })(e),
        o = !r && cs(e, "getType") ? e.getType() : void 0;
      var i,
        s = o;
      if (n)
        if (o) i = n[o];
        else
          for (var _ref24 of Object.entries(n)) {
            var _t180 = _ref24[0];
            var _e116 = _ref24[1];
            ((s = _t180), (i = _e116));
          }
      if (
        !r &&
        s &&
        (cs(e, "getType") ||
          (e.getType = function () {
            return s;
          }),
        cs(e, "clone") ||
          (e.clone = function (t) {
            return (Io(t), new e());
          }),
        cs(e, "importJSON") ||
          (e.importJSON =
            (i && i.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !cs(e, "importDOM") && i)
      ) {
        var _i26 = i,
          _t181 = _i26.importDOM;
        _t181 &&
          (e.importDOM = function () {
            return _t181;
          });
      }
      return { ownNodeConfig: i, ownNodeType: s };
    }
    var fs = function fs(t, e) {
        var n = t;
        for (; null != n && !yo(n); ) {
          if (e(n)) return n;
          n = n.getParent();
        }
        return null;
      },
      ds = { next: "previous", previous: "next" };
    var _hs4 = (function () {
      function hs(t) {
        this.origin = t;
      }
      var _proto15 = hs.prototype;
      _proto15[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return Ks({
            hasNext: Ss,
            initial: this.getAdjacentCaret(),
            map: function map(t) {
              return t;
            },
            step: function step(t) {
              return t.getAdjacentCaret();
            },
          });
        };
      _proto15.getAdjacentCaret = function getAdjacentCaret() {
        return Es(this.getNodeAtCaret(), this.direction);
      };
      _proto15.getSiblingCaret = function getSiblingCaret() {
        return Es(this.origin, this.direction);
      };
      _proto15.remove = function remove() {
        var t = this.getNodeAtCaret();
        return (t && t.remove(), this);
      };
      _proto15.replaceOrInsert = function replaceOrInsert(t, e) {
        var n = this.getNodeAtCaret();
        return (
          t.is(this.origin) ||
            t.is(n) ||
            (null === n ? this.insert(t) : n.replace(t, e)),
          this
        );
      };
      _proto15.splice = function splice(e, n, r) {
        if (r === void 0) {
          r = "next";
        }
        var o = r === this.direction ? n : Array.from(n).reverse();
        var i = this;
        var s = this.getParentAtCaret(),
          l = new Map();
        for (
          var _t182 = i.getAdjacentCaret();
          null !== _t182 && l.size < e;
          _t182 = _t182.getAdjacentCaret()
        ) {
          var _e117 = _t182.origin.getWritable();
          l.set(_e117.getKey(), _e117);
        }
        for (var _e118 of o) {
          if (l.size > 0) {
            var _n85 = i.getNodeAtCaret();
            if (_n85) {
              if (
                (l["delete"](_n85.getKey()),
                l["delete"](_e118.getKey()),
                _n85.is(_e118) || i.origin.is(_e118))
              );
              else {
                var _t183 = _e118.getParent();
                (_t183 && _t183.is(s) && _e118.remove(), _n85.replace(_e118));
              }
            } else null === _n85 && t(263, Array.from(l).join(" "));
          } else i.insert(_e118);
          i = Es(_e118, this.direction);
        }
        for (var _t184 of l.values()) _t184.remove();
        return this;
      };
      return hs;
    })();
    var _gs3 = (function (_hs) {
      function gs() {
        var _this5;
        for (
          var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          args[_key6] = arguments[_key6];
        }
        return (
          ((_this5 = _hs.call.apply(_hs, [this].concat(args)) || this),
          (_this5.type = "child"),
          babelHelpers.assertThisInitialized(_this5)) ||
          babelHelpers.assertThisInitialized(_this5)
        );
      }
      babelHelpers.inheritsLoose(gs, _hs);
      var _proto16 = gs.prototype;
      _proto16.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : As(t, this.direction);
      };
      _proto16.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Es(ys(this.getParentAtCaret(), t), this.direction);
      };
      _proto16.getFlipped = function getFlipped() {
        var t = ps(this.direction);
        return Es(this.getNodeAtCaret(), t) || As(this.origin, t);
      };
      _proto16.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto16.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto16.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof gs &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto16.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return gs;
    })(_hs4);
    var _s = { root: yo, shadowRoot: Wi };
    function ps(t) {
      return ds[t];
    }
    function ys(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return _s[e](t) ? null : t;
    }
    var _ms3 = (function (_hs2) {
      function ms() {
        var _this6;
        for (
          var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          args[_key7] = arguments[_key7];
        }
        return (
          ((_this6 = _hs2.call.apply(_hs2, [this].concat(args)) || this),
          (_this6.type = "sibling"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(ms, _hs2);
      var _proto17 = ms.prototype;
      _proto17.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Es(t, this.direction);
      };
      _proto17.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto17.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto17.getChildCaret = function getChildCaret() {
        return fo(this.origin) ? As(this.origin, this.direction) : null;
      };
      _proto17.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Es(ys(this.getParentAtCaret(), t), this.direction);
      };
      _proto17.getFlipped = function getFlipped() {
        var t = ps(this.direction);
        return (
          Es(this.getNodeAtCaret(), t) || As(this.origin.getParentOrThrow(), t)
        );
      };
      _proto17.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof ms &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto17.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof ms || t instanceof _xs3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return ms;
    })(_hs4);
    var _xs3 = (function (_hs3) {
      function xs(t, e) {
        var _this7;
        ((_this7 = _hs3.call(this, t) || this),
          (_this7.type = "text"),
          (_this7.offset = e));
        return _this7;
      }
      babelHelpers.inheritsLoose(xs, _hs3);
      var _proto18 = xs.prototype;
      _proto18.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Os(t, this.direction, this.offset);
      };
      _proto18.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto18.getChildCaret = function getChildCaret() {
        return null;
      };
      _proto18.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Es(ys(this.getParentAtCaret(), t), this.direction);
      };
      _proto18.getFlipped = function getFlipped() {
        return Os(this.origin, ps(this.direction), this.offset);
      };
      _proto18.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof xs &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto18.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _ms3 || t instanceof xs) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto18.getSiblingCaret = function getSiblingCaret() {
        return Es(this.origin, this.direction);
      };
      return xs;
    })(_hs4);
    function Cs(t) {
      return t instanceof _xs3;
    }
    function Ss(t) {
      return t instanceof _ms3;
    }
    function Ns(t) {
      return t instanceof _gs3;
    }
    var Ts = {
        next: (function (_xs) {
          function _class() {
            var _this8;
            for (
              var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
              _key8 < _len8;
              _key8++
            ) {
              args[_key8] = arguments[_key8];
            }
            return (
              ((_this8 = _xs.call.apply(_xs, [this].concat(args)) || this),
              (_this8.direction = "next"),
              babelHelpers.assertThisInitialized(_this8)) ||
              babelHelpers.assertThisInitialized(_this8)
            );
          }
          babelHelpers.inheritsLoose(_class, _xs);
          var _proto19 = _class.prototype;
          _proto19.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto19.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_xs3),
        previous: (function (_xs2) {
          function _class3() {
            var _this9;
            for (
              var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
              _key9 < _len9;
              _key9++
            ) {
              args[_key9] = arguments[_key9];
            }
            return (
              ((_this9 = _xs2.call.apply(_xs2, [this].concat(args)) || this),
              (_this9.direction = "previous"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class3, _xs2);
          var _proto20 = _class3.prototype;
          _proto20.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto20.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_xs3),
      },
      vs = {
        next: (function (_ms) {
          function _class5() {
            var _this0;
            for (
              var _len0 = arguments.length, args = new Array(_len0), _key0 = 0;
              _key0 < _len0;
              _key0++
            ) {
              args[_key0] = arguments[_key0];
            }
            return (
              ((_this0 = _ms.call.apply(_ms, [this].concat(args)) || this),
              (_this0.direction = "next"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class5, _ms);
          var _proto21 = _class5.prototype;
          _proto21.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto21.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_ms3),
        previous: (function (_ms2) {
          function _class7() {
            var _this1;
            for (
              var _len1 = arguments.length, args = new Array(_len1), _key1 = 0;
              _key1 < _len1;
              _key1++
            ) {
              args[_key1] = arguments[_key1];
            }
            return (
              ((_this1 = _ms2.call.apply(_ms2, [this].concat(args)) || this),
              (_this1.direction = "previous"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class7, _ms2);
          var _proto22 = _class7.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_ms3),
      },
      ks = {
        next: (function (_gs) {
          function _class9() {
            var _this10;
            for (
              var _len10 = arguments.length,
                args = new Array(_len10),
                _key10 = 0;
              _key10 < _len10;
              _key10++
            ) {
              args[_key10] = arguments[_key10];
            }
            return (
              ((_this10 = _gs.call.apply(_gs, [this].concat(args)) || this),
              (_this10.direction = "next"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class9, _gs);
          var _proto23 = _class9.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_gs3),
        previous: (function (_gs2) {
          function _class1() {
            var _this11;
            for (
              var _len11 = arguments.length,
                args = new Array(_len11),
                _key11 = 0;
              _key11 < _len11;
              _key11++
            ) {
              args[_key11] = arguments[_key11];
            }
            return (
              ((_this11 = _gs2.call.apply(_gs2, [this].concat(args)) || this),
              (_this11.direction = "previous"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class1, _gs2);
          var _proto24 = _class1.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getLastChild();
          };
          _proto24.insert = function insert(t) {
            return (
              this.origin.splice(this.origin.getChildrenSize(), 0, [t]),
              this
            );
          };
          return _class1;
        })(_gs3),
      };
    function Es(t, e) {
      return t ? new vs[e](t) : null;
    }
    function Os(t, e, n) {
      return t ? new Ts[e](t, Ms(t, n)) : null;
    }
    function Ms(t, n, r) {
      if (r === void 0) {
        r = "error";
      }
      var o = t.getTextContentSize();
      var i = "next" === n ? o : "previous" === n ? 0 : n;
      return (
        (i < 0 || i > o) &&
          ("clamp" !== r && e(284, String(n), String(o), t.getKey()),
          (i = i < 0 ? 0 : o)),
        i
      );
    }
    function bs(t, e) {
      return new _Is(t, e);
    }
    function As(t, e) {
      return fo(t) ? new ks[e](t) : null;
    }
    function ws(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Ds(t) {
      return t && ws(t.getAdjacentCaret());
    }
    var _Ps = (function () {
      function Ps(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto25 = Ps.prototype;
      _proto25.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Ps(t, e, this.direction);
      };
      _proto25.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto25.getTextSlices = function getTextSlices() {
        var _this14 = this;
        var t = function t(_t185) {
            var e = _this14[_t185].getLatest();
            return Cs(e)
              ? (function (t, e) {
                  var n = t.direction,
                    r = t.origin,
                    o = Ms(r, "focus" === e ? ps(n) : n);
                  return bs(t, o - t.offset);
                })(e, _t185)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t186 = e.caret,
            _r63 = n.caret;
          if (_t186.isSameNodeCaret(_r63))
            return [bs(_t186, _r63.offset - _t186.offset), null];
        }
        return [e, n];
      };
      _proto25.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = Cs(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          r = Cs(n),
          o = function o(e) {
            return e.isSameNodeCaret(n) ? null : Ds(e) || e.getParentCaret(t);
          };
        return Ks({
          hasNext: function hasNext(t) {
            return null !== t && !(r && n.isSameNodeCaret(t));
          },
          initial: e.isSameNodeCaret(n) ? null : o(e),
          map: function map(t) {
            return t;
          },
          step: o,
        });
      };
      _proto25[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.iterNodeCarets("root");
        };
      return Ps;
    })();
    var _Is = (function () {
      function Is(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto26 = Is.prototype;
      _proto26.getSliceIndices = function getSliceIndices() {
        var t = this.distance,
          e = this.caret.offset,
          n = e + t;
        return n < e ? [n, e] : [e, n];
      };
      _proto26.getTextContent = function getTextContent() {
        var _this$getSliceIndices = this.getSliceIndices(),
          t = _this$getSliceIndices[0],
          e = _this$getSliceIndices[1];
        return this.caret.origin.getTextContent().slice(t, e);
      };
      _proto26.getTextContentSize = function getTextContentSize() {
        return Math.abs(this.distance);
      };
      _proto26.removeTextSlice = function removeTextSlice() {
        var _this$caret = this.caret,
          t = _this$caret.origin,
          e = _this$caret.direction,
          _this$getSliceIndices2 = this.getSliceIndices(),
          n = _this$getSliceIndices2[0],
          r = _this$getSliceIndices2[1],
          o = t.getTextContent();
        return Os(t.setTextContent(o.slice(0, n) + o.slice(r)), e, n);
      };
      return Is;
    })();
    function Fs(t) {
      return Rs(t, Es(ai(), t.direction));
    }
    function Ls(t) {
      return Rs(t, t);
    }
    function Rs(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _Ps(e, n, e.direction)
      );
    }
    function Ks(t) {
      var _ref25;
      var e = t.initial,
        n = t.hasNext,
        r = t.step,
        o = t.map;
      var i = e;
      return (
        (_ref25 = {}),
        (_ref25[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref25.next = function next() {
          if (!n(i)) return { done: !0, value: void 0 };
          var t = { done: !1, value: o(i) };
          return ((i = r(i)), t);
        }),
        _ref25
      );
    }
    function Bs(e, n) {
      var r = Us(e.origin, n.origin);
      switch (
        (null === r && t(275, e.origin.getKey(), n.origin.getKey()), r.type)
      ) {
        case "same": {
          var _t187 = "text" === e.type,
            _r64 = "text" === n.type;
          return _t187 && _r64
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t187
                ? -1
                : _r64
                  ? 1
                  : "child" === e.type
                    ? -1
                    : 1;
        }
        case "ancestor":
          return "child" === e.type ? -1 : 1;
        case "descendant":
          return "child" === n.type ? 1 : -1;
        case "branch":
          return zs(r);
      }
    }
    function zs(t) {
      var e = t.a,
        n = t.b,
        r = e.__key,
        o = n.__key;
      var i = e,
        s = n;
      for (; i && s; i = i.getNextSibling(), s = s.getNextSibling()) {
        if (i.__key === o) return -1;
        if (s.__key === r) return 1;
      }
      return null === i ? 1 : -1;
    }
    function Ws(t, e) {
      return e.is(t);
    }
    function $s(t) {
      return fo(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function Us(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var r = new Map();
      for (
        var _$s = $s(e), _t188 = _$s[0], _n86 = _$s[1];
        _t188;
        _n86 = _t188, _t188 = _t188.getParent()
      )
        r.set(_t188, _n86);
      for (
        var _$s2 = $s(n), _o51 = _$s2[0], _i27 = _$s2[1];
        _o51;
        _i27 = _o51, _o51 = _o51.getParent()
      ) {
        var _s16 = r.get(_o51);
        if (void 0 !== _s16)
          return null === _s16
            ? (Ws(e, _o51) || t(276),
              { commonAncestor: _o51, type: "ancestor" })
            : null === _i27
              ? (Ws(n, _o51) || t(277),
                { commonAncestor: _o51, type: "descendant" })
              : (((fo(_s16) || Ws(e, _s16)) &&
                  (fo(_i27) || Ws(n, _i27)) &&
                  _o51.is(_s16.getParent()) &&
                  _o51.is(_i27.getParent())) ||
                  t(278),
                { a: _s16, b: _i27, commonAncestor: _o51, type: "branch" });
      }
      return null;
    }
    function Js(e, n) {
      var r = e.type,
        o = e.key,
        i = e.offset,
        s = Yi(e.key);
      return "text" === r
        ? (tr(s) || t(266, s.getType(), o), Os(s, n, i))
        : (fo(s) || t(267, s.getType(), o), rl(s, e.offset, n));
    }
    function Ys(e, n) {
      var r = n.origin,
        o = n.direction,
        i = "next" === o;
      Cs(n)
        ? e.set(r.getKey(), n.offset, "text")
        : Ss(n)
          ? tr(r)
            ? e.set(r.getKey(), Ms(r, o), "text")
            : e.set(
                r.getParentOrThrow().getKey(),
                r.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((Ns(n) && fo(r)) || t(268),
            e.set(r.getKey(), i ? 0 : r.getChildrenSize(), "element"));
    }
    function js(t) {
      var e = Er(),
        n = ur(e) ? e : Tr();
      return (Hs(n, t), ui(n), n);
    }
    function Hs(t, e) {
      (Ys(t.anchor, e.anchor), Ys(t.focus, e.focus));
    }
    function Vs(t) {
      var e = t.anchor,
        n = t.focus,
        r = Js(e, "next"),
        o = Js(n, "next"),
        i = Bs(r, o) <= 0 ? "next" : "previous";
      return Rs(el(r, i), el(o, i));
    }
    function Gs(t) {
      var e = t.direction,
        n = t.origin,
        r = Es(n, ps(e)).getNodeAtCaret();
      return r ? Es(r, e) : As(n.getParentOrThrow(), e);
    }
    function qs(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _r65 = Ns(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _r65;
        _r65 = _r65.getParentCaret(e)
      )
        n.push(Gs(_r65));
      return n;
    }
    function Xs(t) {
      return !!t && t.origin.isAttached();
    }
    function Qs(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var r = "root",
        o = "next";
      var i = n;
      var s = nl(e, o),
        l = qs(s.anchor, r),
        a = qs(s.focus.getFlipped(), r),
        c = new Set(),
        u = [];
      for (var _t189 of s.iterNodeCarets(r))
        if (Ns(_t189)) c.add(_t189.origin.getKey());
        else if (Ss(_t189)) {
          var _e119 = _t189.origin;
          (fo(_e119) && !c.has(_e119.getKey())) || u.push(_e119);
        }
      for (var _t190 of u) _t190.remove();
      for (var _t191 of s.getTextSlices()) {
        if (!_t191) continue;
        var _e120 = _t191.caret.origin,
          _n87 = _e120.getTextContentSize(),
          _r66 = Gs(Es(_e120, o)),
          _s17 = _e120.getMode();
        if (
          (Math.abs(_t191.distance) === _n87 && "removeEmptySlices" === i) ||
          ("token" === _s17 && 0 !== _t191.distance)
        )
          _r66.remove();
        else if (0 !== _t191.distance) {
          i = "removeEmptySlices";
          var _e121 = _t191.removeTextSlice();
          var _n88 = _t191.caret.origin;
          if ("segmented" === _s17) {
            var _t192 = _e121.origin,
              _n89 = Zn(_t192.getTextContent())
                .setStyle(_t192.getStyle())
                .setFormat(_t192.getFormat());
            (_r66.replaceOrInsert(_n89), (_e121 = Os(_n89, o, _e121.offset)));
          }
          (_n88.is(l[0].origin) && (l[0] = _e121),
            _n88.is(a[0].origin) && (a[0] = _e121.getFlipped()));
        }
      }
      var f, d;
      for (var _t193 of l)
        if (Xs(_t193)) {
          f = Zs(_t193);
          break;
        }
      for (var _t194 of a)
        if (Xs(_t194)) {
          d = Zs(_t194);
          break;
        }
      var h = (function (t, e, n) {
        if (!t || !e) return null;
        var r = t.getParentAtCaret(),
          o = e.getParentAtCaret();
        if (!r || !o) return null;
        var i = r.getParents().reverse();
        i.push(r);
        var s = o.getParents().reverse();
        s.push(o);
        var l = Math.min(i.length, s.length);
        var a;
        for (a = 0; a < l && i[a] === s[a]; a++);
        var c = function c(t, e) {
            var n;
            for (var _r67 = a; _r67 < t.length; _r67++) {
              var _o52 = t[_r67];
              if (Wi(_o52)) return;
              !n && e(_o52) && (n = _o52);
            }
            return n;
          },
          u = c(i, es),
          f =
            u &&
            c(s, function (t) {
              return n.has(t.getKey()) && es(t);
            });
        return u && f ? [u, f] : null;
      })(f, d, c);
      if (h) {
        var _t195 = h[0],
          _e122 = h[1];
        As(_t195, "previous").splice(0, _e122.getChildren());
        var _n90 = _e122.getParent();
        for (_e122.remove(!0); _n90 && _n90.isEmpty(); ) {
          var _t196 = _n90;
          ((_n90 = _n90.getParent()), _t196.remove(!0));
        }
      }
      var g = [f, d].concat(l, a).find(Xs);
      if (g) {
        return Ls(el(Zs(g), e.direction));
      }
      t(
        269,
        JSON.stringify(
          l.map(function (t) {
            return t.origin.__key;
          }),
        ),
      );
    }
    function Zs(t) {
      var e = (function (t) {
          var e = t;
          for (; Ns(e); ) {
            var _t197 = Ds(e);
            if (!Ns(_t197)) break;
            e = _t197;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (tr(e.origin)) return Cs(e) ? e : Os(e.origin, n, n);
      var r = e.getAdjacentCaret();
      return Ss(r) && tr(r.origin) ? Os(r.origin, n, ps(n)) : e;
    }
    function tl(t) {
      return Cs(t) && t.offset !== Ms(t.origin, t.direction);
    }
    function el(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function nl(t, e) {
      return t.direction === e ? t : Rs(el(t.focus, e), el(t.anchor, e));
    }
    function rl(t, e, n) {
      var r = As(t, "next");
      for (var _t198 = 0; _t198 < e; _t198++) {
        var _t199 = r.getAdjacentCaret();
        if (null === _t199) break;
        r = _t199;
      }
      return el(r, n);
    }
    function ol(e) {
      var n = e.origin,
        r = e.offset,
        o = e.direction;
      if (r === Ms(n, o)) return e.getSiblingCaret();
      if (r === Ms(n, ps(o))) return Gs(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(r),
        i = _n$splitText2[0];
      return (tr(i) || t(281), el(Es(i, "next"), o));
    }
    function il(t, e) {
      return !0;
    }
    function sl() {
      var e = [];
      for (
        var _len12 = arguments.length, t = new Array(_len12), _key12 = 0;
        _key12 < _len12;
        _key12++
      ) {
        t[_key12] = arguments[_key12];
      }
      for (var _n91 of t)
        if (_n91 && "string" == typeof _n91)
          for (var _ref27 of _n91.matchAll(/\S+/g)) {
            var _t200 = _ref27[0];
            e.push(_t200);
          }
      return e;
    }
    function ll() {
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      return function () {
        for (var _e123 = t.length - 1; _e123 >= 0; _e123--) t[_e123]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = Fi),
      (exports.$applyNodeReplacement = Ui),
      (exports.$caretFromPoint = Js),
      (exports.$caretRangeFromSelection = Vs),
      (exports.$cloneWithProperties = ss),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = ss(t))[Tn] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = Bs),
      (exports.$copyNode = $i),
      (exports.$create = function (t) {
        var e = ns();
        return (
          Yr(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createLineBreakNode = Fn),
      (exports.$createNodeSelection = vr),
      (exports.$createParagraphNode = ko),
      (exports.$createPoint = sr),
      (exports.$createRangeSelection = Tr),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return kr(null, t, e, null);
      }),
      (exports.$createTabNode = rr),
      (exports.$createTextNode = Zn),
      (exports.$extendCaretToRange = Fs),
      (exports.$findMatchingParent = fs),
      (exports.$getAdjacentChildCaret = Ds),
      (exports.$getAdjacentNode = bi),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          r = t,
          o = Ds(r);
        for (; null === o; ) {
          if ((n--, (o = r.getParentCaret(e)), !o)) return null;
          ((r = o), (o = Ds(r)));
        }
        return o && [o, n];
      }),
      (exports.$getCaretInDirection = el),
      (exports.$getCaretRange = Rs),
      (exports.$getCaretRangeInDirection = nl),
      (exports.$getCharacterOffsets = gr),
      (exports.$getChildCaret = As),
      (exports.$getChildCaretAtIndex = rl),
      (exports.$getChildCaretOrSelf = ws),
      (exports.$getCollapsedCaretRange = Ls),
      (exports.$getCommonAncestor = Us),
      (exports.$getCommonAncestorResultBranchOrder = zs),
      (exports.$getEditor = ns),
      (exports.$getNearestNodeFromDOMNode = ii),
      (exports.$getNearestRootOrShadowRoot = zi),
      (exports.$getNodeByKey = ni),
      (exports.$getNodeByKeyOrThrow = Yi),
      (exports.$getNodeFromDOMNode = ri),
      (exports.$getPreviousSelection = Or),
      (exports.$getRoot = ai),
      (exports.$getSelection = Er),
      (exports.$getSiblingCaret = Es),
      (exports.$getState = G),
      (exports.$getStateChange = function (t, e, n) {
        var r = G(t, n, "direct"),
          o = G(e, n, "direct");
        return n.isEqual(r, o) ? null : [r, o];
      }),
      (exports.$getTextContent = function () {
        var t = Er();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Ms),
      (exports.$getTextPointCaret = Os),
      (exports.$getTextPointCaretSlice = bs),
      (exports.$getWritableNodeState = Q),
      (exports.$hasAncestor = Ri),
      (exports.$hasUpdateTag = function (t) {
        return Vr()._updateTags.has(t);
      }),
      (exports.$insertNodes = function (t) {
        var e = Er() || Or();
        (null === e && (e = ai().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = function (t) {
        return fo(t) && !t.isInline();
      }),
      (exports.$isChildCaret = Ns),
      (exports.$isDecoratorNode = _o),
      (exports.$isEditorState = function (t) {
        return t instanceof _So;
      }),
      (exports.$isElementNode = fo),
      (exports.$isExtendableTextPointCaret = tl),
      (exports.$isInlineElementOrDecoratorNode = function (t) {
        return (fo(t) && t.isInline()) || (_o(t) && t.isInline());
      }),
      (exports.$isLeafNode = function (t) {
        return tr(t) || Ln(t) || _o(t);
      }),
      (exports.$isLineBreakNode = Ln),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _hs4;
      }),
      (exports.$isNodeSelection = dr),
      (exports.$isParagraphNode = Eo),
      (exports.$isRangeSelection = ur),
      (exports.$isRootNode = yo),
      (exports.$isRootOrShadowRoot = Wi),
      (exports.$isSiblingCaret = Ss),
      (exports.$isTabNode = or),
      (exports.$isTextNode = tr),
      (exports.$isTextPointCaret = Cs),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _Is;
      }),
      (exports.$isTokenOrSegmented = jo),
      (exports.$isTokenOrTab = Yo),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = Hr();
        if (n._readOnly) {
          var _t201 = is(n).get(e);
          return _t201 ? Array.from(_t201.values()) : [];
        }
        var r = n._nodeMap,
          o = [];
        for (var _ref29 of r) {
          var _n92 = _ref29[1];
          _n92 instanceof t &&
            _n92.__type === e &&
            _n92.isAttached() &&
            o.push(_n92);
        }
        return o;
      }),
      (exports.$normalizeCaret = Zs),
      (exports.$normalizeSelection__EXPERIMENTAL = at),
      (exports.$onUpdate = Li),
      (exports.$parseSerializedNode = function (t) {
        return to(t, Vr()._nodes);
      }),
      (exports.$removeTextFromCaretRange = Qs),
      (exports.$rewindSiblingCaret = Gs),
      (exports.$selectAll = function (t) {
        var e = ai();
        if (ur(t)) {
          var _e124 = t.anchor,
            _n93 = t.focus,
            _r68 = _e124
              .getNode()
              .getTopLevelElementOrThrow()
              .getParentOrThrow();
          return (
            _e124.set(_r68.getKey(), 0, "element"),
            _n93.set(_r68.getKey(), _r68.getChildrenSize(), "element"),
            at(t),
            t
          );
        }
        {
          var _t202 = e.select(0, e.getChildrenSize());
          return (ui(at(_t202)), _t202);
        }
      }),
      (exports.$setCompositionKey = ti),
      (exports.$setPointFromCaret = Ys),
      (exports.$setSelection = ui),
      (exports.$setSelectionFromCaretRange = js),
      (exports.$setState = function (t, e, n) {
        var r;
        if ((Yr(), "function" == typeof n)) {
          var _o53 = t.getLatest(),
            _i28 = G(_o53, e);
          if (((r = n(_i28)), e.isEqual(_i28, r))) return _o53;
        } else r = n;
        var o = t.getWritable();
        return (Q(o).updateFromKnown(e, r), o);
      }),
      (exports.$splitAtPointCaretNext = function (t, _temp) {
        var _ref30 = _temp === void 0 ? {} : _temp,
          _ref30$$copyElementNo = _ref30.$copyElementNode,
          e = _ref30$$copyElementNo === void 0 ? $i : _ref30$$copyElementNo,
          _ref30$$splitTextPoin = _ref30.$splitTextPointCaretNext,
          n = _ref30$$splitTextPoin === void 0 ? ol : _ref30$$splitTextPoin,
          _ref30$rootMode = _ref30.rootMode,
          r = _ref30$rootMode === void 0 ? "shadowRoot" : _ref30$rootMode,
          _ref30$$shouldSplit = _ref30.$shouldSplit,
          o = _ref30$$shouldSplit === void 0 ? il : _ref30$$shouldSplit;
        if (Cs(t)) return n(t);
        var i = t.getParentCaret(r);
        if (i) {
          var _n94 = i.origin;
          if (Ns(t) && (!_n94.canBeEmpty() || !o(_n94, "first"))) return Gs(i);
          var _r69 = (function (t) {
            var e = [];
            for (
              var _n95 = t.getAdjacentCaret();
              _n95;
              _n95 = _n95.getAdjacentCaret()
            )
              e.push(_n95.origin);
            return e;
          })(t);
          (_r69.length > 0 || (_n94.canBeEmpty() && o(_n94, "last"))) &&
            i.insert(e(_n94).splice(0, 0, _r69));
        }
        return i;
      }),
      (exports.$splitNode = function (e, n) {
        var r = e.getChildAtIndex(n);
        (null == r && (r = e), Wi(e) && t(102));
        var _o56 = function o(e) {
            var n = e.getParentOrThrow(),
              i = Wi(n),
              s = e !== r || i ? $i(e) : e;
            if (i)
              return ((fo(e) && fo(s)) || t(133), e.insertAfter(s), [e, s, s]);
            {
              var _o55 = _o56(n),
                _t203 = _o55[0],
                _r70 = _o55[1],
                _i29 = _o55[2],
                _l12 = e.getNextSiblings();
              return (
                _i29.append.apply(_i29, [s].concat(_l12)),
                [_t203, _r70, s]
              );
            }
          },
          _o54 = _o56(r),
          i = _o54[0],
          s = _o54[1];
        return [i, s];
      }),
      (exports.$updateRangeSelectionFromCaretRange = Hs),
      (exports.ArtificialNode__DO_NOT_USE = _No),
      (exports.BEFORE_INPUT_COMMAND = Vt),
      (exports.BLUR_COMMAND = Ke),
      (exports.CAN_REDO_COMMAND = Fe),
      (exports.CAN_UNDO_COMMAND = Le),
      (exports.CLEAR_EDITOR_COMMAND = Pe),
      (exports.CLEAR_HISTORY_COMMAND = Ie),
      (exports.CLICK_COMMAND = Ht),
      (exports.COLLABORATION_TAG = On),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = Oo),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = Xt),
      (exports.COMPOSITION_END_TAG = Dn),
      (exports.COMPOSITION_START_COMMAND = qt),
      (exports.COMPOSITION_START_TAG = wn),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = ee),
      (exports.COPY_COMMAND = Ae),
      (exports.CUT_COMMAND = we),
      (exports.DELETE_CHARACTER_COMMAND = Qt),
      (exports.DELETE_LINE_COMMAND = ie),
      (exports.DELETE_WORD_COMMAND = oe),
      (exports.DRAGEND_COMMAND = be),
      (exports.DRAGOVER_COMMAND = Me),
      (exports.DRAGSTART_COMMAND = Oe),
      (exports.DROP_COMMAND = ke),
      (exports.DecoratorNode = _go),
      (exports.ElementNode = _uo4),
      (exports.FOCUS_COMMAND = Re),
      (exports.FORMAT_ELEMENT_COMMAND = Ee),
      (exports.FORMAT_TEXT_COMMAND = se),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = En),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = Te),
      (exports.INPUT_COMMAND = Gt),
      (exports.INSERT_LINE_BREAK_COMMAND = Zt),
      (exports.INSERT_PARAGRAPH_COMMAND = te),
      (exports.INSERT_TAB_COMMAND = Ne),
      (exports.INTERNAL_$isBlock = es),
      (exports.IS_ALL_FORMATTING = 2047),
      (exports.IS_BOLD = 1),
      (exports.IS_CODE = 16),
      (exports.IS_HIGHLIGHT = p),
      (exports.IS_ITALIC = 2),
      (exports.IS_STRIKETHROUGH = 4),
      (exports.IS_SUBSCRIPT = 32),
      (exports.IS_SUPERSCRIPT = 64),
      (exports.IS_UNDERLINE = 8),
      (exports.KEY_ARROW_DOWN_COMMAND = _e),
      (exports.KEY_ARROW_LEFT_COMMAND = de),
      (exports.KEY_ARROW_RIGHT_COMMAND = ue),
      (exports.KEY_ARROW_UP_COMMAND = ge),
      (exports.KEY_BACKSPACE_COMMAND = me),
      (exports.KEY_DELETE_COMMAND = Ce),
      (exports.KEY_DOWN_COMMAND = ce),
      (exports.KEY_ENTER_COMMAND = pe),
      (exports.KEY_ESCAPE_COMMAND = xe),
      (exports.KEY_MODIFIER_COMMAND = Be),
      (exports.KEY_SPACE_COMMAND = ye),
      (exports.KEY_TAB_COMMAND = Se),
      (exports.LineBreakNode = _Pn),
      (exports.MOVE_TO_END = fe),
      (exports.MOVE_TO_START = he),
      (exports.NODE_STATE_KEY = "$"),
      (exports.OUTDENT_CONTENT_COMMAND = ve),
      (exports.PASTE_COMMAND = ne),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _To),
      (exports.REDO_COMMAND = ae),
      (exports.REMOVE_TEXT_COMMAND = re),
      (exports.RootNode = _po),
      (exports.SELECTION_CHANGE_COMMAND = Yt),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = jt),
      (exports.SELECT_ALL_COMMAND = De),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = bn),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = Mn),
      (exports.SKIP_SELECTION_FOCUS_TAG = An),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _nr),
      (exports.TextNode = _Jn2),
      (exports.UNDO_COMMAND = le),
      (exports.addClassNamesToElement = function (t) {
        var _t$classList2;
        for (
          var _len14 = arguments.length,
            e = new Array(_len14 > 1 ? _len14 - 1 : 0),
            _key14 = 1;
          _key14 < _len14;
          _key14++
        ) {
          e[_key14 - 1] = arguments[_key14];
        }
        var n = sl.apply(void 0, e);
        n.length > 0 &&
          (_t$classList2 = t.classList).add.apply(_t$classList2, n);
      }),
      (exports.buildImportMap = function (t) {
        return t;
      }),
      (exports.configExtension = function () {
        for (
          var _len15 = arguments.length, t = new Array(_len15), _key15 = 0;
          _key15 < _len15;
          _key15++
        ) {
          t[_key15] = arguments[_key15];
        }
        return t;
      }),
      (exports.createCommand = Jt),
      (exports.createEditor = function (t) {
        var e = t || {},
          n = qr(),
          r = e.theme || {},
          o = void 0 === t ? n : e.parentEditor || null,
          i = e.disableEvents || !1,
          s = xo(),
          l = e.namespace || (null !== o ? o._config.namespace : gi()),
          a = e.editorState,
          c = [_po, _Jn2, _Pn, _nr, _To, _No].concat(e.nodes || []),
          u = e.onError,
          f = e.html,
          d = void 0 === e.editable || e.editable;
        var h;
        if (void 0 === t && null !== n) h = n._nodes;
        else {
          h = new Map();
          for (var _t204 = 0; _t204 < c.length; _t204++) {
            var _e125 = c[_t204],
              _n96 = null,
              _r71 = null;
            if ("function" != typeof _e125) {
              var _t205 = _e125;
              ((_e125 = _t205.replace),
                (_n96 = _t205["with"]),
                (_r71 = _t205.withKlass || null));
            }
            us(_e125);
            var _o57 = _e125.getType(),
              _i30 = bo(_e125);
            h.set(_o57, {
              exportDOM: f && f["export"] ? f["export"].get(_e125) : void 0,
              klass: _e125,
              replace: _n96,
              replaceWithKlass: _r71,
              sharedNodeState: q(c[_t204]),
              transforms: _i30,
            });
          }
        }
        var g = new _Do(
          s,
          o,
          h,
          { disableEvents: i, namespace: l, theme: r },
          u || console.error,
          (function (t, e) {
            var n = new Map(),
              r = new Set(),
              o = function o(t) {
                Object.keys(t).forEach(function (e) {
                  var r = n.get(e);
                  (void 0 === r && ((r = []), n.set(e, r)), r.push(t[e]));
                });
              };
            return (
              t.forEach(function (t) {
                var e = t.klass.importDOM;
                if (null == e || r.has(e)) return;
                r.add(e);
                var n = e.call(t.klass);
                null !== n && o(n);
              }),
              e && o(e),
              n
            );
          })(h, f ? f["import"] : void 0),
          d,
          t,
        );
        return (
          void 0 !== a && ((g._pendingEditorState = a), (g._dirtyType = 2)),
          (function (t) {
            (t.registerCommand(Vt, cn, Oo),
              t.registerCommand(Gt, un, Oo),
              t.registerCommand(qt, fn, Oo),
              t.registerCommand(Xt, dn, Oo),
              t.registerCommand(ce, gn, Oo));
          })(g),
          g
        );
      }),
      (exports.createSharedNodeState = q),
      (exports.createState = function (t, e) {
        return new V(t, e);
      }),
      (exports.declarePeerDependency = function (t, e) {
        return [t, e];
      }),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.flipDirection = ps),
      (exports.getDOMOwnerDocument = Ii),
      (exports.getDOMSelection = Vi),
      (exports.getDOMSelectionFromTarget = Gi),
      (exports.getDOMTextNode = Go),
      (exports.getEditorPropertyFromDOMNode = Jo),
      (exports.getNearestEditorFromDOMNode = Uo),
      (exports.getRegisteredNode = Ro),
      (exports.getRegisteredNodeOrThrow = Lo),
      (exports.getStaticNodeConfig = us),
      (exports.getTextDirection = function (t) {
        return M.test(t) ? "rtl" : b.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = bo),
      (exports.isBlockDomNode = ts),
      (exports.isCurrentlyReadOnlyMode = Jr),
      (exports.isDOMDocumentNode = Vo),
      (exports.isDOMNode = Xi),
      (exports.isDOMTextNode = Ho),
      (exports.isDOMUnmanaged = as),
      (exports.isDocumentFragment = Qi),
      (exports.isExactShortcutMatch = Si),
      (exports.isHTMLAnchorElement = function (t) {
        return qi(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = qi),
      (exports.isInlineDomNode = Zi),
      (exports.isLexicalEditor = $o),
      (exports.isModifierMatch = Ci),
      (exports.isSelectionCapturedInDecoratorInput = zo),
      (exports.isSelectionWithinEditor = Wo),
      (exports.makeStepwiseIterator = Ks),
      (exports.mergeRegister = ll),
      (exports.normalizeClassNames = sl),
      (exports.removeClassNamesFromElement = function (t) {
        var _t$classList3;
        for (
          var _len16 = arguments.length,
            e = new Array(_len16 > 1 ? _len16 - 1 : 0),
            _key16 = 1;
          _key16 < _len16;
          _key16++
        ) {
          e[_key16 - 1] = arguments[_key16];
        }
        var n = sl.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = Qo),
      (exports.resetRandomKey = function () {
        Fo = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMUnmanaged = function (t) {
        t.__lexicalUnmanaged = !0;
      }),
      (exports.setNodeIndentFromDOM = ls),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n97 in e)
          if (t[_n97] !== e[_n97]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.toggleTextFormatType = qo));
  },
  null,
);
