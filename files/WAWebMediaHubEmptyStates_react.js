__d(
  "WAWebMediaHubEmptyStates.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubLogger",
    "WAWebMediaHubSearchUtils",
    "WAWebText.react",
    "WAWebThemeContext",
    "WAWebWamEnumActionCode",
    "WAWebWdsIllEmptyCactusIcon.react",
    "WAWebWdsIllLinkWebIcon.react",
    "WAWebWdsIllPhotosClipIcon.react",
    "WAWebWdsIllShareDocumentIcon.react",
    "WAWebWdsPictoDocIcon.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.use,
      m = c.useEffect,
      p = {
        container: { width: "xdzyupr", $$css: !0 },
        containerWide: { width: "x1kmanbg", $$css: !0 },
        empty: { height: "x5yr21d", $$css: !0 },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.description,
        r = e.icon,
        a = e.shouldHaveWideText,
        i = e.title,
        l = a === void 0 ? !1 : a,
        s;
      t[0] !== r
        ? ((s =
            r != null
              ? r
              : u.jsx(o("WAWebWdsPictoDocIcon.react").WdsPictoDocIcon, {})),
          (t[0] = r),
          (t[1] = s))
        : (s = t[1]);
      var c = s,
        d;
      t[2] !== i
        ? ((d = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            weight: "semibold",
            paddingTop: 16,
            textAlign: "center",
            children: i,
          })),
          (t[2] = i),
          (t[3] = d))
        : (d = t[3]);
      var m = l && p.containerWide,
        _;
      t[4] !== m
        ? ((_ = [p.container, m]), (t[4] = m), (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] !== n || t[7] !== _
        ? ((f = u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
            textAlign: "center",
            xstyle: _,
            children: n,
          })),
          (t[6] = n),
          (t[7] = _),
          (t[8] = f))
        : (f = t[8]);
      var g;
      return (
        t[9] !== c || t[10] !== d || t[11] !== f
          ? ((g = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              grow: 1,
              children: [c, d, f],
            })),
            (t[9] = c),
            (t[10] = d),
            (t[11] = f),
            (t[12] = g))
          : (g = t[12]),
        g
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.icon,
        r;
      t[0] !== n
        ? ((r =
            n != null
              ? n
              : u.jsx(
                  o("WAWebWdsIllPhotosClipIcon.react").WdsIllPhotosClipIcon,
                  {},
                )),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a, i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = y()), (i = v("media")), (t[2] = a), (t[3] = i))
        : ((a = t[2]), (i = t[3]));
      var l;
      return (
        t[4] !== r
          ? ((l = u.jsx(_, { icon: r, title: a, description: i })),
            (t[4] = r),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.icon,
        r;
      t[0] !== n
        ? ((r =
            n != null
              ? n
              : u.jsx(
                  o("WAWebWdsIllShareDocumentIcon.react")
                    .WdsIllShareDocumentIcon,
                  {},
                )),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a, i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = y()), (i = v("docs")), (t[2] = a), (t[3] = i))
        : ((a = t[2]), (i = t[3]));
      var l;
      return (
        t[4] !== r
          ? ((l = u.jsx(_, { icon: r, title: a, description: i })),
            (t[4] = r),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.icon,
        r;
      t[0] !== n
        ? ((r =
            n != null
              ? n
              : u.jsx(o("WAWebWdsIllLinkWebIcon.react").WdsIllLinkWebIcon, {})),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a, i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = y()), (i = v("links")), (t[2] = a), (t[3] = i))
        : ((a = t[2]), (i = t[3]));
      var l;
      return (
        t[4] !== r
          ? ((l = u.jsx(_, { icon: r, title: a, description: i })),
            (t[4] = r),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    function y() {
      return s._(/*BTDS*/ "No recent results");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = { darkStroke: { stroke: "x4281ju", $$css: !0 } };
    function b() {
      var e = o("react-compiler-runtime").c(8),
        t = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        n = t.tab,
        r = d(o("WAWebThemeContext").ThemeContext),
        a = r.theme,
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = y()), (e[0] = i))
        : (i = e[0]);
      var l = i,
        s;
      e[1] !== n ? ((s = v(n)), (e[1] = n), (e[2] = s)) : (s = e[2]);
      var c = s,
        m = a === "dark" ? C.darkStroke : void 0,
        p;
      e[3] !== m
        ? ((p = u.jsx(
            o("WAWebWdsIllEmptyCactusIcon.react").WdsIllEmptyCactusIcon,
            { innerStyles: { backline: m } },
          )),
          (e[3] = m),
          (e[4] = p))
        : (p = e[4]);
      var f = p,
        g;
      return (
        e[5] !== c || e[6] !== f
          ? ((g = u.jsx(_, { icon: f, title: l, description: c })),
            (e[5] = c),
            (e[6] = f),
            (e[7] = g))
          : (g = e[7]),
        g
      );
    }
    function v(e) {
      switch (e) {
        case "media":
          return s._(
            /*BTDS*/ "To find media from more than 14 days ago, try searching your chats.",
          );
        case "docs":
          return s._(
            /*BTDS*/ "To find docs from more than 14 days ago, try searching your chats.",
          );
        case "links":
          return s._(
            /*BTDS*/ "To find links from more than 14 days ago, try searching your chats.",
          );
      }
    }
    var S = {
      text: {
        width: "xm6i5cn",
        marginInlineStart: "xvc5jky",
        marginInlineEnd: "x11t971q",
        $$css: !0,
      },
    };
    function R(e) {
      switch (e) {
        case "media":
          return s._(/*BTDS*/ "Recent media only");
        case "docs":
          return s._(/*BTDS*/ "Recent docs only");
        case "links":
          return s._(/*BTDS*/ "Recent links only");
        default:
          return null;
      }
    }
    function L(e) {
      switch (e) {
        case "media":
          return s._(
            /*BTDS*/ "You can find older photos and videos in your chats or on your phone.",
          );
        case "docs":
          return s._(
            /*BTDS*/ "You can find older docs in your chats or on your phone.",
          );
        case "links":
          return s._(
            /*BTDS*/ "You can find older links in your chats or on your phone.",
          );
        default:
          return null;
      }
    }
    function E() {
      var e = o("react-compiler-runtime").c(11),
        t = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        n = t.tab,
        a;
      e[0] !== n ? ((a = R(n)), (e[0] = n), (e[1] = a)) : (a = e[1]);
      var i;
      e[2] !== a
        ? ((i = u.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDeemphasized",
            children: a,
          })),
          (e[2] = a),
          (e[3] = i))
        : (i = e[3]);
      var l;
      e[4] !== n ? ((l = L(n)), (e[4] = n), (e[5] = l)) : (l = e[5]);
      var s;
      e[6] !== l
        ? ((s = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: l,
          })),
          (e[6] = l),
          (e[7] = s))
        : (s = e[7]);
      var c;
      return (
        e[8] !== i || e[9] !== s
          ? ((c = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              justify: "center",
              marginTop: 16,
              marginBottom: 32,
              gap: 2,
              xstyle: S.text,
              children: [i, s],
            })),
            (e[8] = i),
            (e[9] = s),
            (e[10] = c))
          : (c = e[10]),
        c
      );
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.collection,
        r = e.filteredMsgs,
        a = e.noMsgsComponent,
        i = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        l = i.searchQuery,
        s = i.searchStatusCaption,
        c = i.searchStatusSender,
        d = n.length === 0 && n.hasMoreMsgs !== !0,
        _;
      t[0] !== l
        ? ((_ = o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(l)),
          (t[0] = l),
          (t[1] = _))
        : (_ = t[1]);
      var f = _,
        g = r.length === 0 && s === !1 && c === !1 && f,
        h = d ? a : null,
        y,
        C;
      (t[2] !== g || t[3] !== d
        ? ((y = function () {
            (!d && !g) ||
              o("WAWebMediaHubLogger").logMediaHubAction({
                action: o("WAWebWamEnumActionCode").ACTION_CODE.SCROLL,
                customFields: { searchResultsReturned: !1 },
              });
          }),
          (C = [d, g]),
          (t[2] = g),
          (t[3] = d),
          (t[4] = y),
          (t[5] = C))
        : ((y = t[4]), (C = t[5])),
        m(y, C));
      var v;
      t[6] !== g
        ? ((v = g ? u.jsx(b, {}) : null), (t[6] = g), (t[7] = v))
        : (v = t[7]);
      var S = v;
      if (!d && !g) return null;
      var R = h != null ? h : S,
        L;
      return (
        t[8] !== R
          ? ((L = u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              grow: 1,
              xstyle: p.empty,
              children: R,
            })),
            (t[8] = R),
            (t[9] = L))
          : (L = t[9]),
        L
      );
    }
    ((l.WAWebMediaHubNoMedia = f),
      (l.WAWebMediaHubNoDocs = g),
      (l.WAWebMediaHubNoLinks = h),
      (l.WAWebMediaHubOnlyRecent = E),
      (l.WAWebMediaHubEmptyMessage = k));
  },
  226,
);
