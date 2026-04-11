__d(
  "WAWebEmojiText.react",
  [
    "WABidi",
    "WANullthrows",
    "WAWebBlockQuoteMutatorComponent.react",
    "WAWebBulletedListMutatorComponent.react",
    "WAWebClassnames",
    "WAWebCopyPasteSelectable.react",
    "WAWebDebounce",
    "WAWebEmoji",
    "WAWebFormat",
    "WAWebFormatConfiguration",
    "WAWebJsxSerializer.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebL10N",
    "WAWebListenerHoc_DEPRECATED",
    "WAWebNonEmptyString",
    "WAWebNumberedListMutatorComponent.react",
    "WAWebUA",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.PureComponent,
      m = c.createRef,
      p = [
        r("WAWebBulletedListMutatorComponent.react"),
        r("WAWebNumberedListMutatorComponent.react"),
        r("WAWebBlockQuoteMutatorComponent.react"),
      ],
      _ = {
        breakWord: { wordBreak: "x13faqbe", $$css: !0 },
        clickable: {
          cursor: "x1ypdohk",
          ":hover_textDecoration": "xt0b8zv",
          $$css: !0,
        },
        dirMismatch: { display: "x1lliihq", width: "xh8yej3", $$css: !0 },
        ellipsify: {
          flexGrow: "x1iyjqo2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        inlineblock: { display: "x1rg5ohu", $$css: !0 },
        displayBlock: { display: "x1lliihq", $$css: !0 },
        multiline: { whiteSpace: "x1fj9vlw", $$css: !0 },
        preserveWhitespace: { whiteSpace: "x126k92a", $$css: !0 },
        preformatted: {
          whiteSpace: "x1sdyfia",
          width: "xm6i5cn",
          display: "x1rg5ohu",
          $$css: !0,
        },
      },
      f = { SMALL: "SMALL", LARGE: "LARGE" },
      g = 4096,
      h = 12;
    function y(e) {
      return o("WAWebEmoji").EmojiUtil.containsEmoji(e.substring(0, g));
    }
    var C = (function (t) {
      function n() {
        for (var n, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
          i[l] = arguments[l];
        return (
          (n = t.call.apply(t, [this].concat(i)) || this),
          (n.state = { text: String(n.props.text || ""), ellipsified: null }),
          (n.refContainer = m()),
          (n.$1 = !1),
          (n.$2 = r("WAWebDebounce")(function () {
            n.setState({ ellipsified: null }, n.ellipsify);
          }, 10)),
          (n.$3 = function (e) {
            var t = [],
              n = r("WAWebL10N").LR("ltr", "rtl"),
              a = function (t) {
                var e;
                if (t == null) return n;
                if (typeof t == "string") {
                  var r;
                  return (r = o("WABidi").dir(t)) != null ? r : n;
                }
                return a(
                  t == null || (e = t.props) == null || (e = e.children) == null
                    ? void 0
                    : e[0],
                );
              },
              i = [],
              l = function () {
                i.length !== 0 &&
                  (t.push({ dir: a(i[0]), content: i }), (i = []));
              };
            for (var s of e)
              if (typeof s == "string") {
                var u = s.split(/(\r?\n)/);
                u.forEach(function (e) {
                  (e !== "" && i.push(e), e.match(/\r?\n/) && l());
                });
              } else
                p.includes(s.type)
                  ? (l(), t.push({ dir: n, content: [s] }))
                  : i.push(s);
            return (l(), t);
          }),
          (n.ellipsify = function () {
            var e = n.refContainer.current;
            if (e) {
              var t = r("WANullthrows")(e.parentElement),
                a = e.querySelectorAll("img");
              if (a.length) {
                var i = e.clientWidth;
                e.style.overflow = "visible";
                var l = e.clientWidth !== i;
                if (((e.style.overflow = "hidden"), !!l)) {
                  var s = !!r("WAWebL10N").isRTL() == !!n.props.dirMismatch,
                    u = s ? t.clientWidth - E(t, e) - h : h,
                    c = R(a, u, s),
                    d = a[c];
                  n.setState({
                    ellipsified: o("WAWebNonEmptyString").asMaybeNonEmptyString(
                      S(e, d),
                    ),
                  });
                }
              }
            }
          }),
          (n.$4 = function () {
            return y(n.state.text) && n.ellipsify();
          }),
          (n.$5 = function (e, t) {
            var o = n.props.direction,
              a = n.$3(e);
            return a.map(function (e, n) {
              var i =
                  o == null ||
                  e.dir === o ||
                  (e.dir === "rtl") === r("WAWebL10N").isRTL(),
                l = i ? null : e.dir,
                s = a.length - 1 === n,
                c = {
                  0: "",
                  2: "x1lliihq xh8yej3",
                  1: "x1lliihq",
                  3: "xh8yej3 x1lliihq",
                }[(!i << 1) | (!!(!s && i) << 0)];
              return u.jsxs(
                "span",
                {
                  dir: l,
                  className: c,
                  children: [
                    e.content,
                    s && t ? String.fromCodePoint(8230) : null,
                  ],
                },
                n,
              );
            });
          }),
          (n.$6 = function () {
            n.$1 ||
              ((n.$1 = !0), n.props.listeners.add(window, "resize", n.$2));
          }),
          (n.componentDidMount = function () {
            (!o("WAWebUA").UA.supportsEmojiEllipsification &&
              n.props.ellipsify &&
              y(n.state.text) &&
              n.$6(),
              !(
                o("WAWebUA").UA.supportsEmojiEllipsification ||
                !n.props.ellipsify
              ) && n.$4());
          }),
          (n.$7 = function () {
            n.$1 &&
              ((n.$1 = !1), n.props.listeners.remove(window, "resize", n.$2));
          }),
          (n.render = function () {
            var t, a, i;
            if (!n.state.text) return null;
            var l = n.props,
              s = l.breakWord,
              c = l.direction,
              d = l.dirMismatch,
              m = l.displayBlock,
              p = l.ellipsify,
              f = l.emojiXstyle,
              h = l.inferLinesDirection,
              y = l.inlineblock,
              C = l.multiline,
              b = l.onClick,
              v = l.preformatted,
              S = l.preserveWhitespace,
              R = l.tabIndex,
              L = l.textLimit,
              E = function (t) {
                b != null &&
                  r("WAWebKeyboardIsKeyActivation")(t) &&
                  (t.preventDefault(), b(t));
              },
              k =
                n.state.ellipsified != null
                  ? n.state.ellipsified
                  : n.state.text,
              I = c === "inherit" ? null : c || "auto",
              T = !!n.props.selectable,
              D =
                n.props.formatters ||
                o("WAWebFormatConfiguration").EmojiOnly({
                  selectable: T,
                  emojiXstyle: f,
                }),
              x = L || 1 / 0;
            p && k.length > g && x > g && (x = g);
            var $ = d === !0 && !h,
              P = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                n.props.className,
                (e || (e = r("stylex")))(
                  p && _.ellipsify,
                  y && _.inlineblock,
                  m && _.displayBlock,
                  b && _.clickable,
                  $ && _.dirMismatch,
                  C && _.multiline,
                  S === !0 && _.preserveWhitespace,
                  v === !0 && _.preformatted,
                  s && _.breakWord,
                  n.props.xstyle,
                ),
              ),
              N = k,
              M = r("WAWebFormat")(
                N,
                D,
                r("WAWebJsxSerializer.react"),
                void 0,
                x,
              ),
              w = n.state.ellipsified != null || k.length > x,
              A = n.props.inferLinesDirection ? n.$5(M, w) : M,
              F = (t = n.props.title) != null ? t : n.state.text;
            return u.jsx(o("WAWebCopyPasteSelectable.react").Selectable, {
              "data-testid": void 0,
              className: P,
              dir: I,
              element: n.props.element,
              onClick: b,
              onKeyDown: b != null ? E : void 0,
              ref: n.refContainer,
              role: n.props.role,
              selectable: T,
              tabIndex: R != null ? Number(R) : void 0,
              "aria-label": (a = n.props.ariaLabel) != null ? a : void 0,
              title: n.props.titlify ? F : void 0,
              style: {
                minHeight: ((i = n.props.minTextHeight) != null ? i : 0) + "px",
              },
              children: A,
            });
          }),
          babelHelpers.assertThisInitialized(n) ||
            babelHelpers.assertThisInitialized(n)
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.getElement = function () {
          return this.refContainer.current;
        }),
        (n.getDerivedStateFromProps = function (t, n) {
          var e,
            r = null,
            a = String((e = t.text) != null ? e : "");
          return (
            a !== n.text && (r = { text: a }),
            o("WAWebUA").UA.supportsEmojiEllipsification ||
              !t.ellipsify ||
              r == null ||
              y(a) ||
              (r = babelHelpers.extends({}, r, { ellipsified: null })),
            r
          );
        }),
        (a.getWidth = function () {
          var e = this.refContainer.current;
          return e ? e.getBoundingClientRect().width : 0;
        }),
        (a.componentDidUpdate = function (t, n) {
          o("WAWebUA").UA.supportsEmojiEllipsification ||
            !this.props.ellipsify ||
            n.text === this.state.text ||
            (y(this.state.text) ? (this.$2(), this.$6()) : this.$7());
        }),
        (a.componentWillUnmount = function () {
          this.$2.cancel();
        }),
        n
      );
    })(d);
    C.defaultProps = { element: "span", emojiSize: f.SMALL, textLimit: 1 / 0 };
    var b = o("WAWebListenerHoc_DEPRECATED").ListenerHOC(C),
      v = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.getElement = function () {
              return t.getComponent().getElement();
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getWidth = function () {
            return this.getComponent().getWidth();
          }),
          t
        );
      })(b);
    function S(e, t, n) {
      if ((n === void 0 && (n = { found: !1 }), e === t))
        return ((n.found = !0), "");
      if (e instanceof HTMLImageElement) return e.alt;
      if (e.nodeType === Node.TEXT_NODE) return e.nodeValue;
      for (
        var r = L(e), o = "", a = 0;
        a < e.childNodes.length && ((o += S(e.childNodes[a], t, n)), !n.found);
      )
        a++;
      if (r == null) return o;
      var i = r[0],
        l = r[1];
      return "" + i + o + l;
    }
    function R(e, t, n) {
      for (var r = 0; r < e.length; ) {
        var o = e[r];
        if (
          (n && o.offsetLeft + o.clientWidth >= t) ||
          (!n && o.offsetLeft <= t)
        )
          break;
        r++;
      }
      return r;
    }
    function L(e) {
      if (e instanceof Element)
        switch (e.tagName) {
          case "CODE":
            return ["```", "```"];
          case "STRONG":
            return ["*", "*"];
          case "EM":
            return ["_", "_"];
          case "DEL":
            return ["~", "~"];
          case "LI":
            return ["* ", ""];
          default:
            return null;
        }
      return null;
    }
    function E(e, t) {
      for (var n = 0, r = e.childNodes, o = 0; o < r.length; o++) {
        var a = r[o];
        if (a === t) break;
        n += a instanceof Element ? a.clientWidth : 0;
      }
      return n;
    }
    ((l.EMOJI_SIZE = f), (l.EmojiText = v));
  },
  98,
);
