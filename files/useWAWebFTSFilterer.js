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
    "react-compiler-runtime",
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
      var i = o("react-compiler-runtime").c(32),
        l = n === void 0 ? m : n,
        s = r("useWAWebStableArrayModelState")(),
        u = s[0],
        p = s[1],
        _ = r("useWAWebUiIdle")(),
        f;
      i[0] !== l
        ? ((f = new (r("WAWebMsgsCollectionFilterer"))(l)),
          (i[0] = l),
          (i[1] = f))
        : (f = i[1]);
      var g = d(f),
        h;
      i[2] !== a || i[3] !== e || i[4] !== t || i[5] !== p || i[6] !== _
        ? ((h = function () {
            _(function () {
              g.current.filter(e, t).then(function (e) {
                a != null ? p(e.filter(a)) : p(e);
              });
            });
          }),
          (i[2] = a),
          (i[3] = e),
          (i[4] = t),
          (i[5] = p),
          (i[6] = _),
          (i[7] = h))
        : (h = i[7]);
      var y = h,
        C;
      i[8] !== y
        ? ((C = function () {
            y();
          }),
          (i[8] = y),
          (i[9] = C))
        : (C = i[9]);
      var b;
      (i[10] !== y || i[11] !== t
        ? ((b = [y, t]), (i[10] = y), (i[11] = t), (i[12] = b))
        : (b = i[12]),
        c(C, b));
      var v;
      (i[13] !== a || i[14] !== e || i[15] !== y || i[16] !== t || i[17] !== p
        ? ((v = function (r) {
            if (
              (g.current.cacheMessageTokens(r),
              o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(t))
            ) {
              y();
              return;
            }
            if (a != null) {
              var n = [].concat(e.getModelsArray());
              p(n.filter(a));
            } else p([].concat(e.getModelsArray()));
          }),
          (i[13] = a),
          (i[14] = e),
          (i[15] = y),
          (i[16] = t),
          (i[17] = p),
          (i[18] = v))
        : (v = i[18]),
        o("useWAWebListener").useListener(e, "add", v));
      var S;
      (i[19] !== u || i[20] !== p
        ? ((S = function (t) {
            (g.current.removeMessageTokensFromCache(t),
              p(
                u.filter(function (e) {
                  return (
                    e.id !== t.id &&
                    o("WAWebMsgCollection").MsgCollection.get(e.id) != null
                  );
                }),
              ));
          }),
          (i[19] = u),
          (i[20] = p),
          (i[21] = S))
        : (S = i[21]),
        o("useWAWebListener").useListener(e, "remove", S));
      var R;
      (i[22] !== p
        ? ((R = function () {
            (g.current.clearTokensCache(), p([]));
          }),
          (i[22] = p),
          (i[23] = R))
        : (R = i[23]),
        o("useWAWebListener").useListener(e, "reset", R));
      var L;
      (i[24] !== e || i[25] !== t || i[26] !== p
        ? ((L = function () {
            o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(t) ||
              p([].concat(e.getModelsArray()));
          }),
          (i[24] = e),
          (i[25] = t),
          (i[26] = p),
          (i[27] = L))
        : (L = i[27]),
        o("useWAWebListener").useListener(e, "sort", L));
      var E, k;
      return (
        i[28] !== e || i[29] !== _
          ? ((k = function () {
              _(function () {
                e.forEach(function (e) {
                  g.current.cacheMessageTokens(e);
                });
              });
            }),
            (E = [_, e]),
            (i[28] = e),
            (i[29] = _),
            (i[30] = E),
            (i[31] = k))
          : ((E = i[30]), (k = i[31])),
        c(k, E),
        u
      );
    }
    ((l.getWAWebFTSSenderOrGroupName = p),
      (l.getWAWebFTSLinkTextAndDescription = _),
      (l.useWAWebFTSFilterer = f));
  },
  98,
);
