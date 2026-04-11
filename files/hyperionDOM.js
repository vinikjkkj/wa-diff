__d(
  "hyperionDOM",
  ["hyperionCore", "hyperionGlobals"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map(),
      u = new Map();
    (e || (e = o("hyperionCore"))).registerShadowPrototypeGetter(function (e) {
      if (e instanceof Node) {
        var t;
        return (t = u.get(e.nodeName)) != null ? t : s.get(e.nodeType);
      }
      return null;
    });
    var c = (function (t) {
        function n(n, r, a) {
          var i,
            l,
            c =
              (i = a == null ? void 0 : a.targetPrototype) != null
                ? i
                : n == null
                  ? void 0
                  : n.prototype;
          if (!c && a) {
            var m = a.sampleObject,
              p = a.nodeName,
              _ = a.nodeType,
              f = m;
            if (!f && _)
              switch (_) {
                case window.document.DOCUMENT_NODE:
                  f = window.document;
                  break;
                case window.document.ELEMENT_NODE:
                  f = d;
                  break;
                default:
                  o("hyperionGlobals").assert(
                    !1,
                    "Unsupported and unexpected nodeType " + _,
                  );
                  break;
              }
            (!f && p && (f = window.document.createElement(p)),
              f && (c = Object.getPrototypeOf(f)));
          }
          if (
            (o("hyperionGlobals").assert(
              c && typeof c == "object",
              "Cannot create shadow prototype for undefined",
            ),
            (l = t.call(this, c, r) || this),
            a)
          ) {
            var g = a.nodeName,
              h = a.nodeType;
            (g && u.set(g.toUpperCase(), l), h && s.set(h, l));
          }
          if (a != null && a.registerOnPrototype && c)
            try {
              (e || (e = o("hyperionCore"))).registerShadowPrototype(c, l);
            } catch (e) {}
          return l;
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(e.ShadowPrototype),
      d = window.document.head;
    function m(t, n) {
      var r,
        a =
          (r = (e || (e = o("hyperionCore"))).getObjectExtension(t, !0)) == null
            ? void 0
            : r.shadowPrototype;
      return a ? a.getVirtualProperty(n) : null;
    }
    var p = new c(Event, null, {
        sampleObject: new Event("tmp"),
        registerOnPrototype: !0,
      }),
      _ = e.interceptMethod("stopPropagation", p),
      f = Object.freeze({
        __proto__: null,
        IEventPrototype: p,
        stopPropagation: _,
      }),
      g = new c(EventTarget, null, { sampleObject: d }),
      h = e.interceptMethod("addEventListener", g),
      y = e.interceptMethod("dispatchEvent", g),
      C = e.interceptMethod("removeEventListener", g),
      b = Object.freeze({
        __proto__: null,
        IEventTargetPrototype: g,
        addEventListener: h,
        dispatchEvent: y,
        removeEventListener: C,
      }),
      v = new c(Node, g, { sampleObject: d }),
      S = e.interceptMethod("appendChild", v),
      R = e.interceptMethod("cloneNode", v, !0),
      L = e.interceptMethod("insertBefore", v),
      E = e.interceptMethod("removeChild", v),
      k = e.interceptMethod("replaceChild", v),
      I = Object.freeze({
        __proto__: null,
        INodePrototype: v,
        appendChild: S,
        cloneNode: R,
        insertBefore: L,
        removeChild: E,
        replaceChild: k,
      }),
      T = new c(CSSStyleDeclaration, null, { sampleObject: d.style });
    T.extension.useCaseInsensitivePropertyName = !0;
    var D = e.interceptMethod("getPropertyValue", T),
      x = e.interceptMethod("removeProperty", T),
      $ = e.interceptMethod("setProperty", T),
      P = Object.freeze({
        __proto__: null,
        ICSSStyleDeclarationPrototype: T,
        getPropertyValue: D,
        removeProperty: x,
        setProperty: $,
      }),
      N = new c(Attr, v, {
        sampleObject: d.attributes[0],
        nodeType: document.ATTRIBUTE_NODE,
      }),
      M = e.interceptAttribute("value", N);
    function w() {
      (M.getter.setCustom(function () {
        var e = this,
          t = e.ownerElement;
        if (t) {
          var n = m(t, e.name);
          if (n) {
            var r = n.getRawValue(t);
            if (r != null) return r;
          }
        }
        return M.getter.getOriginal().call(e);
      }),
        M.setter.setCustom(function (e) {
          var t = this,
            n = t.ownerElement;
          if (n) {
            var r = m(n, t.name);
            if (r) return r.setRawValue(n, e);
          }
          return M.setter.getOriginal().call(t, e);
        }));
    }
    var A = new c(Element, v, {
      sampleObject: d,
      nodeType: document.ELEMENT_NODE,
    });
    A.extension.useCaseInsensitivePropertyName = !0;
    var F = e.interceptMethod("getAttribute", A),
      O = e.interceptMethod("getAttributeNS", A),
      B = e.interceptMethod("setAttribute", A),
      W = e.interceptMethod("setAttributeNS", A),
      q = e.interceptMethod("setAttributeNode", A),
      U = e.interceptMethod("setAttributeNodeNS", A);
    function V() {
      (F.setCustom(function (e) {
        var t = m(this, e);
        if (t) {
          var n = t.getRawValue(this);
          if (n !== null) return n;
        }
        return F.getOriginal().apply(this, arguments);
      }),
        B.setCustom(function (e, t) {
          var n = m(this, e);
          return n
            ? n.setRawValue(this, t)
            : B.getOriginal().apply(this, arguments);
        }),
        O.setCustom(function (e, t) {
          var n = m(this, t);
          if (n) {
            var r = n.getRawValue(this);
            if (r !== null) return r;
          }
          return O.getOriginal().apply(this, arguments);
        }),
        W.setCustom(function (e, t, n) {
          var r = m(this, t);
          return r
            ? r.setRawValue(this, n)
            : W.getOriginal().apply(this, arguments);
        }));
      function e(e) {
        return function (t) {
          var n,
            r = !t.ownerElement,
            o = m(this, t.name);
          if (r && o) {
            var a = t.value;
            ((n = e.call(this, t)), o.setRawValue(this, a));
          } else n = e.call(this, t);
          return n;
        };
      }
      (q.setCustom(e(q.getOriginal())), U.setCustom(e(U.getOriginal())));
    }
    var H = (function () {
        function e(e, t) {
          ((this.rawValue = e), (this.processedValue = t));
        }
        var t = e.prototype;
        return (
          (t.getRawValue = function (t) {
            return this.rawValue.getter.interceptor.call(t);
          }),
          (t.setRawValue = function (t, n) {
            return this.rawValue.setter.interceptor.call(t, n);
          }),
          (t.getProcessedValue = function (t) {
            return this.processedValue.getter.interceptor.call(t);
          }),
          (t.setProcessedValue = function (t, n) {
            return this.processedValue.setter.interceptor.call(t, n);
          }),
          e
        );
      })(),
      G = function () {
        (w(), V(), (G = function () {}));
      },
      z = (function (t) {
        function n(n, r, a) {
          var i;
          return (
            (i = t.call(this, n, r, a) || this),
            (i.raw = new (
              e || (e = o("hyperionCore"))
            ).AttributeInterceptorBase(
              n,
              function () {
                return F.getOriginal().call(this, n);
              },
              function (e) {
                return B.getOriginal().call(this, n, e);
              },
            )),
            A.setVirtualProperty(n, new H(i.raw, i)),
            G(),
            i
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(e.AttributeInterceptor);
    function j(t, n) {
      return (e || (e = o("hyperionCore"))).interceptAttributeBase(t, n, z);
    }
    var K = A,
      Q = e.interceptMethod("after", K),
      X = e.interceptMethod("append", K),
      Y = e.interceptMethod("before", K),
      J = e.interceptMethod("getAttributeNames", K),
      Z = e.interceptMethod("getAttributeNode", K, !0),
      ee = e.interceptMethod("getAttributeNodeNS", K, !0),
      te = e.interceptMethod("getBoundingClientRect", K),
      ne = e.interceptMethod("getClientRects", K),
      re = e.interceptMethod("getElementsByClassName", K),
      oe = e.interceptMethod("getElementsByTagName", K),
      ae = e.interceptMethod("getElementsByTagNameNS", K),
      ie = e.interceptMethod("hasAttribute", K),
      le = e.interceptMethod("hasAttributeNS", K),
      se = e.interceptMethod("hasAttributes", K),
      ue = e.interceptMethod("insertAdjacentElement", K),
      ce = e.interceptMethod("insertAdjacentHTML", K),
      de = e.interceptMethod("insertAdjacentText", K),
      me = e.interceptMethod("prepend", K),
      pe = e.interceptMethod("remove", K),
      _e = e.interceptMethod("removeAttribute", K),
      fe = e.interceptMethod("removeAttributeNode", K),
      ge = e.interceptMethod("removeAttributeNS", K),
      he = e.interceptMethod("replaceChildren", K),
      ye = e.interceptMethod("replaceWith", K),
      Ce = e.interceptMethod("toggleAttribute", K),
      be = j("id", K),
      ve = e.interceptAttribute("innerHTML", K),
      Se = Object.freeze({
        __proto__: null,
        IElementtPrototype: K,
        after: Q,
        append: X,
        before: Y,
        getAttribute: F,
        getAttributeNS: O,
        getAttributeNames: J,
        getAttributeNode: Z,
        getAttributeNodeNS: ee,
        getBoundingClientRect: te,
        getClientRects: ne,
        getElementsByClassName: re,
        getElementsByTagName: oe,
        getElementsByTagNameNS: ae,
        hasAttribute: ie,
        hasAttributeNS: le,
        hasAttributes: se,
        id: be,
        innerHTML: ve,
        insertAdjacentElement: ue,
        insertAdjacentHTML: ce,
        insertAdjacentText: de,
        prepend: me,
        remove: pe,
        removeAttribute: _e,
        removeAttributeNS: ge,
        removeAttributeNode: fe,
        replaceChildren: he,
        replaceWith: ye,
        setAttribute: B,
        setAttributeNS: W,
        setAttributeNode: q,
        setAttributeNodeNS: U,
        toggleAttribute: Ce,
      }),
      Re = new c(HTMLElement, K, {
        sampleObject: d,
        nodeType: document.ELEMENT_NODE,
      }),
      Le = e.interceptAttribute("style", Re),
      Ee = Object.freeze({
        __proto__: null,
        IHTMLElementtPrototype: Re,
        style: Le,
      }),
      ke = new c(HTMLInputElement, Re, {
        sampleObject: document.createElement("input"),
        nodeType: document.ELEMENT_NODE,
      }),
      Ie = e.interceptAttribute("checked", ke),
      Te = Object.freeze({
        __proto__: null,
        IHTMLInputElementPrototype: ke,
        checked: Ie,
      }),
      De = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.AttributeInterceptor);
    function xe(t, n) {
      return (e || (e = o("hyperionCore"))).interceptAttributeBase(t, n, De);
    }
    var $e = new c(Window, g, {
        targetPrototype: window,
        registerOnPrototype: !0,
      }),
      Pe = e.interceptMethod("fetch", $e),
      Ne = e.interceptMethod("requestAnimationFrame", $e),
      Me = e.interceptMethod("requestIdleCallback", $e),
      we = e.interceptConstructorMethod("IntersectionObserver", $e),
      Ae = e.interceptConstructorMethod("MutationObserver", $e),
      Fe = xe("onerror", $e),
      Oe = xe("ondevicemotion", $e),
      Be = xe("ondeviceorientation", $e),
      We = xe("onorientationchange", $e),
      qe = Object.freeze({
        __proto__: null,
        IWindowPrototype: $e,
        IntersectionObserver: we,
        MutationObserver: Ae,
        fetch: Pe,
        ondevicemotion: Oe,
        ondeviceorientation: Be,
        onerror: Fe,
        onorientationchange: We,
        requestAnimationFrame: Ne,
        requestIdleCallback: Me,
      }),
      Ue = new c(History, null, {
        sampleObject: window.history,
        registerOnPrototype: !0,
      }),
      Ve = e.interceptMethod("back", Ue),
      He = e.interceptMethod("forward", Ue),
      Ge = e.interceptMethod("go", Ue),
      ze = e.interceptMethod("pushState", Ue),
      je = e.interceptMethod("replaceState", Ue),
      Ke = Object.freeze({
        __proto__: null,
        IHistoryPrototype: Ue,
        back: Ve,
        forward: He,
        go: Ge,
        pushState: ze,
        replaceState: je,
      }),
      Qe = new c(XMLHttpRequest, g, {
        sampleObject: new XMLHttpRequest(),
        registerOnPrototype: !0,
      }),
      Xe = e.interceptConstructorMethod("XMLHttpRequest", $e),
      Ye = e.interceptMethod("open", Qe),
      Je = e.interceptMethod("send", Qe),
      Ze = xe("onabort", Qe),
      et = xe("onerror", Qe),
      tt = xe("onload", Qe),
      nt = xe("onloadend", Qe),
      rt = xe("onloadstart", Qe),
      ot = xe("onprogress", Qe),
      at = xe("readystatechange", Qe),
      it = xe("ontimeout", Qe);
    ((l.ICSSStyleDeclaration = P),
      (l.IElement = Se),
      (l.IElementtPrototype = K),
      (l.IEvent = f),
      (l.IEventTarget = b),
      (l.IHTMLElement = Ee),
      (l.IHTMLInputElement = Te),
      (l.IHistory = Ke),
      (l.INode = I),
      (l.IWindow = qe),
      (l.addEventListener = h),
      (l.after = Q),
      (l.append = X),
      (l.appendChild = S),
      (l.before = Y),
      (l.checked = Ie),
      (l.constructor = Xe),
      (l.fetch = Pe),
      (l.innerHTML = ve),
      (l.insertAdjacentElement = ue),
      (l.insertBefore = L),
      (l.interceptElementAttribute = j),
      (l.onabort = Ze),
      (l.onerror = et),
      (l.onload = tt),
      (l.onloadend = nt),
      (l.onloadstart = rt),
      (l.onprogress = ot),
      (l.ontimeout = it),
      (l.open = Ye),
      (l.prepend = me),
      (l.pushState = ze),
      (l.readystatechange = at),
      (l.remove = pe),
      (l.removeChild = E),
      (l.removeEventListener = C),
      (l.replaceChild = k),
      (l.replaceChildren = he),
      (l.replaceState = je),
      (l.replaceWith = ye),
      (l.requestAnimationFrame = Ne),
      (l.requestIdleCallback = Me),
      (l.send = Je),
      (l.stopPropagation = _));
  },
  98,
);
