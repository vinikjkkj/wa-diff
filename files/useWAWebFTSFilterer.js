__d(
  "useWAWebFTSFilterer",
  [
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMediaHubSearchUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgsCollectionFilterer",
    "react",
    "useWAWebListener",
    "useWAWebStableArrayModelState",
    "useWAWebUiIdle",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef,
      m = function (t) {
        var e = [],
          n = o("WAWebFrontendMsgGetters").getText(t);
        return (n != null && e.push(n), e.join(" "));
      },
      p = function (t) {
        var e = [],
          n = o("WAWebFrontendMsgGetters").getSenderObj(t).name;
        n != null && e.push(n);
        var r = o("WAWebFrontendMsgGetters").getChat(t);
        if (r != null) {
          var a = o("WAWebFrontendChatGetters").getFormattedTitle(r);
          e.push(a);
        }
        return e.join(" ");
      },
      _ = function (t) {
        var e = [
          m(t),
          o("WAWebMsgGetters").getTitle(t),
          o("WAWebMsgGetters").getDescription(t),
        ];
        return e.join(" ");
      };
    function f(e, t, n, a) {
      n === void 0 && (n = m);
      var i = r("useWAWebStableArrayModelState")(),
        l = i[0],
        s = i[1],
        p = r("useWAWebUiIdle")(),
        _ = d(new (r("WAWebMsgsCollectionFilterer"))(n)),
        f = u(
          function () {
            p(function () {
              _.current.filter(e, t).then(function (e) {
                a != null ? s(e.filter(a)) : s(e);
              });
            });
          },
          [t, p, e, s, a],
        );
      return (
        c(
          function () {
            f();
          },
          [f, t],
        ),
        o("useWAWebListener").useListener(e, "add", function (n) {
          if (
            (_.current.cacheMessageTokens(n),
            o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(t))
          ) {
            f();
            return;
          }
          if (a != null) {
            var r = [].concat(e.getModelsArray());
            s(r.filter(a));
          } else s([].concat(e.getModelsArray()));
        }),
        o("useWAWebListener").useListener(e, "remove", function (e) {
          (_.current.removeMessageTokensFromCache(e),
            s(
              l.filter(function (t) {
                return (
                  t.id !== e.id &&
                  o("WAWebMsgCollection").MsgCollection.get(t.id) != null
                );
              }),
            ));
        }),
        o("useWAWebListener").useListener(e, "reset", function () {
          (_.current.clearTokensCache(), s([]));
        }),
        o("useWAWebListener").useListener(e, "sort", function () {
          o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(t) ||
            s([].concat(e.getModelsArray()));
        }),
        c(
          function () {
            p(function () {
              e.forEach(function (e) {
                _.current.cacheMessageTokens(e);
              });
            });
          },
          [p, e],
        ),
        l
      );
    }
    ((l.getWAWebFTSSenderOrGroupName = p),
      (l.getWAWebFTSLinkTextAndDescription = _),
      (l.useWAWebFTSFilterer = f));
  },
  98,
);
