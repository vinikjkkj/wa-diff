__d(
  "WAWebMessageListGenerateMsgListRows",
  [
    "WALogger",
    "WAThrottle",
    "WATimeUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMaybeInsertHistoryBundleInfo",
    "WAWebMessageListAlbums",
    "WAWebMessageListBotCarousel",
    "WAWebMessageListDayOfMsg",
    "WAWebMsgGetters",
    "WAWebThreadMsgUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["type"],
      u = 10;
    function c(e, t) {
      return t != null && e != null && e.id.equals(t.id);
    }
    function d(e, t, n, a, i, l) {
      var s = [],
        d = 0,
        g;
      for (d = 0; !g && d < t.length; d++) g = t[d];
      d--;
      for (
        var h = !1,
          y = !1,
          C = g ? r("WAWebMessageListDayOfMsg")(g) : 0,
          b = 0,
          v = d,
          S = null,
          R = null;
        g;
      ) {
        var L = g;
        (y || s.push({ type: "date", msg: L, count: b++ }),
          L === a && e.unread && s.push({ type: "unread", unreadCount: i }));
        var E = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(L),
          k =
            (S != null && S.equals(E)) ||
            (E != null && R != null && E.key.equals(R));
        ((S = E), (R = L.id));
        for (var I = void 0, T = d + 1; !I && T < t.length; T++) I = t[T];
        var D = void 0,
          x = void 0,
          $ = void 0,
          P = [],
          N = [],
          M = !1,
          w = !1,
          A = void 0,
          F = !1,
          O = null,
          B = o("WAWebFrontendMsgGetters").getAsGroupedSticker(L.unsafe());
        if (B && !p(L, l)) {
          (P.push(B), (F = c(L, n)), (O = 0), (v = d + 1));
          var W = t[v],
            q =
              W != null
                ? o("WAWebFrontendMsgGetters").getAsGroupedSticker(W.unsafe())
                : null;
          q &&
            o("WAWebMessageListAlbums").canBeGroupedAsAlbum(L, W) &&
            W !== a &&
            !p(W, l) &&
            (P.push(q),
            (I = t[v + 1]),
            (w = !0),
            (A = !0),
            c(W, n) && ((F = !0), (O = 1)));
        }
        var U = !1,
          V = o("WAWebFrontendMsgGetters").getAsBotPluginCarouselMsg(
            L.unsafe(),
          );
        if (V) {
          ((U = c(L, n)), N.push(V));
          var H = g,
            G = void 0;
          for (v = d; v < t.length - 1 && N.length < u; v++) {
            ((H = t[v]), (G = t[v + 1]));
            var z =
              G != null
                ? o("WAWebFrontendMsgGetters").getAsBotPluginCarouselMsg(
                    G.unsafe(),
                  )
                : null;
            if (
              z &&
              o("WAWebMessageListBotCarousel").canBeGroupedAsBotCarousel(H, G)
            )
              (N.push(G), c(G, n) && (U = !0));
            else break;
          }
          N.length >= 1 && ((M = !0), (I = t[v + 1]));
        }
        if (M) {
          var j;
          (s.push({
            type: "botPluginCarousel",
            botPluginCarouselId: (j = N[0].id) == null ? void 0 : j.id,
            msgs: N,
            isFocused: U,
          }),
            (d = v + 1),
            (g = t[d]),
            (h = !1));
          continue;
        }
        var K = o("WAWebFrontendMsgGetters").getAsAlbumAsset(L.unsafe());
        if (K && !p(L, l)) {
          P.push(K);
          var Q = g,
            X = void 0;
          for (
            F = c(g, n), v = d;
            v < t.length - 1 &&
            P.length < o("WAWebMessageListAlbums").ALBUM_MAX_SIZE;
            v++
          ) {
            ((Q = t[v]), (X = t[v + 1]));
            var Y =
              X != null
                ? o("WAWebFrontendMsgGetters").getAsAlbumAsset(X.unsafe())
                : null;
            if (
              Y &&
              o("WAWebMessageListAlbums").canBeGroupedAsAlbum(Q, X) &&
              X !== a &&
              !p(X, l)
            )
              (P.push(Y), c(X, n) && (F = !0));
            else break;
          }
          P.length >= o("WAWebMessageListAlbums").ALBUM_MIN_SIZE &&
            ((w = !0), (A = !1), (I = t[v + 1]));
        }
        if (I) {
          var J = I;
          (($ = r("WAWebMessageListDayOfMsg")(I)),
            (x = $ === C),
            (D =
              x &&
              o("WAWebMessageListAlbums").canBeGroupedWithNext(L, J) &&
              I !== a),
            x || f(C, $));
        } else ((D = !1), (x = !1), ($ = 0));
        if (w) {
          var Z = void 0;
          (A === !0
            ? (Z = P.reduce(function (e, t) {
                return e + "-" + t.id.id;
              }, "grouped-sticker-"))
            : (Z = _(P)),
            s.push({
              type: "album",
              msgs: P,
              albumId: Z,
              groupedWithPrev: h,
              groupedWithNext: D,
              isFocusedAlbum: F,
              focusedMsgIndex: O,
            }));
          var ee = P[P.length - 1],
            te = r("WAWebMaybeInsertHistoryBundleInfo")(ee, I);
          (te != null && s.push(te),
            (d = v + 1),
            (g = t[d]),
            (h = D),
            (y = x),
            (C = $));
          continue;
        }
        s.push({
          type: "msg",
          msg: L,
          isFocused: c(L, n),
          groupedWithPrev: h,
          groupedWithNext: D,
          isFollowUpReply: k,
        });
        var ne = r("WAWebMaybeInsertHistoryBundleInfo")(L, I);
        (ne != null && s.push(ne), d++, (h = D), (y = x), (C = $), (g = I));
      }
      return m(s, e);
    }
    function m(e, t) {
      var n = t.botPluginCarousel,
        a = t.date,
        i = t.historyBundleInfo,
        l = t.msgGroup,
        u = t.unread,
        c = [],
        d = [],
        m = function () {
          d.length > 0 && (c.push(l(d)), (d = []));
        };
      for (var p of e)
        switch ((p.type !== "msg" && p.type !== "album" && m(), p.type)) {
          case "msg":
          case "album":
            (d.push(p), p.groupedWithNext || m());
            break;
          case "date": {
            c.push(
              a(
                p.msg,
                p.count,
                o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(p.msg) !=
                  null,
              ),
            );
            break;
          }
          case "unread":
            c.push(u(p.unreadCount));
            break;
          case "botPluginCarousel":
            {
              var _ = p.type,
                f = babelHelpers.objectWithoutPropertiesLoose(p, s);
              c.push(n(f));
            }
            break;
          case "historyBundleInfo":
            c.push(i(p.authorName, p.bundleKey));
            break;
          default:
            var g = p.type;
            throw r("err")("Invalid message list row type " + p.type);
        }
      return c;
    }
    function p(e, t) {
      return t == null ? !0 : e.t > t.t;
    }
    function _(e) {
      var t = e.length,
        n = e[0] ? e[0].id.id : "",
        r = e[t - 1] ? e[t - 1].id.id : "";
      return "album-" + n + "-" + r + "-" + t;
    }
    function f(e, t) {
      if (!(e <= t)) {
        var n = Math.floor((e - t) / o("WATimeUtils").DAY_SECONDS);
        n >= 2 && g(e, t, n);
      }
    }
    var g = o("WAThrottle").throttle(
      function (t, n, r) {
        return o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[generateMsgListRows] msg order mismatch: ",
              " vs ",
              ", ",
              " days diff",
            ])),
          t,
          n,
          r,
        );
      },
      o("WATimeUtils").MINUTE_MILLISECONDS,
      { leading: !0, trailing: !1 },
    );
    l.default = d;
  },
  98,
);
