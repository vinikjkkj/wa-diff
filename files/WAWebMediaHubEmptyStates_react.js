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
      var t = e.description,
        n = e.icon,
        r = e.shouldHaveWideText,
        a = r === void 0 ? !1 : r,
        i = e.title,
        l =
          n != null
            ? n
            : u.jsx(o("WAWebWdsPictoDocIcon.react").WdsPictoDocIcon, {});
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        grow: 1,
        children: [
          l,
          u.jsx(o("WAWebText.react").WAWebTextTitle, {
            weight: "semibold",
            paddingTop: 16,
            textAlign: "center",
            children: i,
          }),
          u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
            textAlign: "center",
            xstyle: [p.container, a && p.containerWide],
            children: t,
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.icon;
      return u.jsx(_, {
        icon:
          t != null
            ? t
            : u.jsx(
                o("WAWebWdsIllPhotosClipIcon.react").WdsIllPhotosClipIcon,
                {},
              ),
        title: y(),
        description: v("media"),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.icon;
      return u.jsx(_, {
        icon:
          t != null
            ? t
            : u.jsx(
                o("WAWebWdsIllShareDocumentIcon.react").WdsIllShareDocumentIcon,
                {},
              ),
        title: y(),
        description: v("docs"),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.icon;
      return u.jsx(_, {
        icon:
          t != null
            ? t
            : u.jsx(o("WAWebWdsIllLinkWebIcon.react").WdsIllLinkWebIcon, {}),
        title: y(),
        description: v("links"),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "No recent results");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = { darkStroke: { stroke: "x4281ju", $$css: !0 } };
    function b() {
      var e = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        t = e.tab,
        n = d(o("WAWebThemeContext").ThemeContext),
        r = n.theme,
        a = y(),
        i = v(t),
        l = u.jsx(o("WAWebWdsIllEmptyCactusIcon.react").WdsIllEmptyCactusIcon, {
          innerStyles: { backline: r === "dark" ? C.darkStroke : void 0 },
        });
      return u.jsx(_, { icon: l, title: a, description: i });
    }
    b.displayName = b.name + " [from " + i.id + "]";
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
      var e = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        t = e.tab;
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        justify: "center",
        marginTop: 16,
        marginBottom: 32,
        gap: 2,
        xstyle: S.text,
        children: [
          u.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDeemphasized",
            children: R(t),
          }),
          u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: L(t),
          }),
        ],
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.collection,
        n = e.filteredMsgs,
        r = e.noMsgsComponent,
        a = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        i = a.searchQuery,
        l = a.searchStatusCaption,
        s = a.searchStatusSender,
        c = t.length === 0 && t.hasMoreMsgs !== !0,
        d = o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(i),
        _ = n.length === 0 && l === !1 && s === !1 && d,
        f = c ? r : null;
      m(
        function () {
          (!c && !_) ||
            o("WAWebMediaHubLogger").logMediaHubAction({
              action: o("WAWebWamEnumActionCode").ACTION_CODE.SCROLL,
              customFields: { searchResultsReturned: !1 },
            });
        },
        [c, _],
      );
      var g = _ ? u.jsx(b, {}) : null;
      return !c && !_
        ? null
        : u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            grow: 1,
            xstyle: p.empty,
            children: f != null ? f : g,
          });
    }
    ((k.displayName = k.name + " [from " + i.id + "]"),
      (l.WAWebMediaHubNoMedia = f),
      (l.WAWebMediaHubNoDocs = g),
      (l.WAWebMediaHubNoLinks = h),
      (l.WAWebMediaHubOnlyRecent = E),
      (l.WAWebMediaHubEmptyMessage = k));
  },
  226,
);
