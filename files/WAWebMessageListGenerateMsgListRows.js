__d(
  "WAWebMessageListGenerateMsgListRows",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMaybeInsertHistoryBundleInfo",
    "WAWebMessageListAlbums",
    "WAWebMessageListBotCarousel",
    "WAWebMessageListDayOfMsg",
    "WAWebMsgGetters",
    "WAWebThreadMsgUtils",
    "err",
    "lodash",
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
          S = null;
        g;
      ) {
        var R = g;
        (y || s.push({ type: "date", msg: R, count: b++ }),
          R === a && e.unread && s.push({ type: "unread", unreadCount: i }));
        var L = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(R),
          E = S != null && S.equals(L);
        S = L;
        for (var k = void 0, I = d + 1; !k && I < t.length; I++) k = t[I];
        var T = void 0,
          D = void 0,
          x = void 0,
          $ = [],
          P = [],
          N = !1,
          M = !1,
          w = void 0,
          A = !1,
          F = null,
          O = o("WAWebFrontendMsgGetters").getAsGroupedSticker(R.unsafe());
        if (O && !p(R, l)) {
          ($.push(O), (A = c(R, n)), (F = 0), (v = d + 1));
          var B = t[v],
            W =
              B != null
                ? o("WAWebFrontendMsgGetters").getAsGroupedSticker(B.unsafe())
                : null;
          W &&
            o("WAWebMessageListAlbums").canBeGroupedAsAlbum(R, B) &&
            B !== a &&
            !p(B, l) &&
            ($.push(W),
            (k = t[v + 1]),
            (M = !0),
            (w = !0),
            c(B, n) && ((A = !0), (F = 1)));
        }
        var q = !1,
          U = o("WAWebFrontendMsgGetters").getAsBotPluginCarouselMsg(
            R.unsafe(),
          );
        if (U) {
          ((q = c(R, n)), P.push(U));
          var V = g,
            H = void 0;
          for (v = d; v < t.length - 1 && P.length < u; v++) {
            ((V = t[v]), (H = t[v + 1]));
            var G =
              H != null
                ? o("WAWebFrontendMsgGetters").getAsBotPluginCarouselMsg(
                    H.unsafe(),
                  )
                : null;
            if (
              G &&
              o("WAWebMessageListBotCarousel").canBeGroupedAsBotCarousel(V, H)
            )
              (P.push(H), c(H, n) && (q = !0));
            else break;
          }
          P.length >= 1 && ((N = !0), (k = t[v + 1]));
        }
        if (N) {
          var z;
          (s.push({
            type: "botPluginCarousel",
            botPluginCarouselId: (z = P[0].id) == null ? void 0 : z.id,
            msgs: P,
            isFocused: q,
          }),
            (d = v + 1),
            (g = t[d]),
            (h = !1));
          continue;
        }
        var j = o("WAWebFrontendMsgGetters").getAsAlbumAsset(R.unsafe());
        if (j && !p(R, l)) {
          $.push(j);
          var K = g,
            Q = void 0;
          for (
            A = c(g, n), v = d;
            v < t.length - 1 &&
            $.length < o("WAWebMessageListAlbums").ALBUM_MAX_SIZE;
            v++
          ) {
            ((K = t[v]), (Q = t[v + 1]));
            var X =
              Q != null
                ? o("WAWebFrontendMsgGetters").getAsAlbumAsset(Q.unsafe())
                : null;
            if (
              X &&
              o("WAWebMessageListAlbums").canBeGroupedAsAlbum(K, Q) &&
              Q !== a &&
              !p(Q, l)
            )
              ($.push(X), c(Q, n) && (A = !0));
            else break;
          }
          $.length >= o("WAWebMessageListAlbums").ALBUM_MIN_SIZE &&
            ((M = !0), (w = !1), (k = t[v + 1]));
        }
        if (k) {
          var Y = k;
          ((x = r("WAWebMessageListDayOfMsg")(k)),
            (D = x === C),
            (T =
              D &&
              o("WAWebMessageListAlbums").canBeGroupedWithNext(R, Y) &&
              k !== a),
            D || f(C, x));
        } else ((T = !1), (D = !1), (x = 0));
        if (M) {
          var J = void 0;
          (w === !0
            ? (J = $.reduce(function (e, t) {
                return e + "-" + t.id.id;
              }, "grouped-sticker-"))
            : (J = _($)),
            s.push({
              type: "album",
              msgs: $,
              albumId: J,
              groupedWithPrev: h,
              groupedWithNext: T,
              isFocusedAlbum: A,
              focusedMsgIndex: F,
            }));
          var Z = $[$.length - 1],
            ee = r("WAWebMaybeInsertHistoryBundleInfo")(Z, k);
          (ee != null && s.push(ee),
            (d = v + 1),
            (g = t[d]),
            (h = T),
            (y = D),
            (C = x));
          continue;
        }
        s.push({
          type: "msg",
          msg: R,
          isFocused: c(R, n),
          groupedWithPrev: h,
          groupedWithNext: T,
          isFollowUpReply: E,
        });
        var te = r("WAWebMaybeInsertHistoryBundleInfo")(R, k);
        (te != null && s.push(te), d++, (h = T), (y = D), (C = x), (g = k));
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
    var g = r("lodash").debounce(
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
