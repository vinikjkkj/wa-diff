__d(
  "reactComponentNameSemanticsCheck",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
        "Animated(div)",
        "Box",
        "Child",
        "Cell",
        "CometImage",
        "ComponentLoader",
        "Div",
        "DirectBadgeIconNoMemo",
        "FocusWithinHandler",
        "LegacyHidden",
        "Path",
        "SearchCometGlobalTypeaheadWithBackButtonFocus",
        "StrictMode",
        "Svg",
        "WebView",
        "GeoBaseText",
        "FocusGroup",
        "FocusTable",
        "MDSText",
        "CometAppViewStack",
        "CometImageFromIXValue",
        "CometPrerenderer",
        "CometOnOutsideClick",
        "CometToast",
        "PolarisNavigationIcons",
        /CometHideableComponent/,
        /LazyLoadEntryPointContainer/,
        /relay-hooks/,
        /CommandWrapper/,
        /ScrollView/,
        /Layout/,
        /Base$/,
        /Boundary$/,
        /LoadingState$/,
        /FocusManager/,
        /Column$/,
        /Strategy$/,
        /Typeahead.*Strategy/,
        /CometList_/,
        /CometSSR/,
        /IGCore/,
        /^ActorHovercard/,
        /^Base/,
        /^CometHero/,
        /^FDS/,
        /^Hero/,
        /^IGDS/,
        /^XDS/,
        /^deferredLoadComponent/,
        /^html\./,
        /^t[d]$/,
        /Container$/,
        /Context$/,
        /Entities$/,
        /Factory$/,
        /Focus.*Region/,
        /Grid$/,
        /HideLayer/,
        /Icon$/,
        /Impl$/,
        /InputButton$/,
        /Item$/,
        /ItemSelectable/,
        /KeyCommands$/,
        /Link$/,
        /ListCell/,
        /Logger$/,
        /MitigationNode$/,
        /OnEscape/,
        /Overlay$/,
        /OverlayInternal$/,
        /Placeholder$/,
        /Pressable/,
        /Provider$/,
        /Provider_/,
        /ReactWarnings/,
        /Ref$/,
        /Refs$/,
        /Relay$/,
        /Renderer$/,
        /Resolver$/,
        /Root$/,
        /Routes$/,
        /Row$/,
        /SVG/,
        /ScrollableArea/,
        /Theme$/,
        /Tooltip/,
        /Trigger$/,
        /Typeahead/,
        /Virtualization$/,
        /Wrapper$/,
        /\.svg$/,
      ],
      l = new Set(
        Array.from(e).filter(function (e) {
          return typeof e == "string";
        }),
      ),
      s = Array.from(e).filter(function (e) {
        return e instanceof RegExp;
      }),
      u = [
        "ChatTab",
        "Comment",
        "Composer",
        "Feed",
        "Story",
        "Search",
        "Reel",
        "Profile",
        "Message",
      ],
      c = new Set(
        Array.from(u).filter(function (e) {
          return typeof e == "string";
        }),
      ),
      d = Array.from(u).filter(function (e) {
        return e instanceof RegExp;
      });
    function m(e) {
      var t = e;
      return (
        e.includes(" [") && (t = e.split(" [")[0]),
        (t = t.trim()),
        t.length <= 2
          ? !0
          : c.has(t) ||
              d.some(function (e) {
                return e.test(t);
              })
            ? !1
            : l.has(t) ||
              s.some(function (e) {
                return e.test(t);
              })
      );
    }
    var p = [
        "MessageList",
        "MWXText",
        "MDSText",
        "MWChatContact",
        "MWLSChatTabHeader",
      ],
      _ = new Set(
        Array.from(p).filter(function (e) {
          return typeof e == "string";
        }),
      ),
      f = Array.from(p).filter(function (e) {
        return e instanceof RegExp;
      });
    function g(e) {
      var t = e.trim();
      return (
        _.has(t) ||
        f.some(function (e) {
          return e.test(t);
        })
      );
    }
    ((i.isReactComponentNameMeaningless = m),
      (i.isReactComponentTextBlocked = g));
  },
  66,
);
