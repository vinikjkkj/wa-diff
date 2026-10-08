__d(
  "WAWebMessageListGenerateMsgListRows",
  [
    "WALogger",
    "WAThrottle",
    "WATimeUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMaybeInsertHistoryBundleInfo",
    "WAWebMessageListAlbums",
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
    function d(e, t) {
      return t.botResponseTargetId === e.botResponseTargetId;
    }
    function m(e, t, n, a, i, l) {
      var s = [],
        m = 0,
        h;
      for (m = 0; !h && m < t.length; m++) h = t[m];
      m--;
      for (
        var y = !1,
          C = !1,
          b = h ? r("WAWebMessageListDayOfMsg")(h) : 0,
          v = 0,
          S = m,
          R = null,
          L = null;
        h;
      ) {
        var E = h;
        (C || s.push({ type: "date", msg: E, count: v++ }),
          E === a && e.unread && s.push({ type: "unread", unreadCount: i }));
        var k = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(E.unsafe()),
          I =
            (R != null && R.equals(k)) ||
            (k != null && L != null && k.key.equals(L));
        ((R = k), (L = E.id));
        for (var T = void 0, D = m + 1; !T && D < t.length; D++) T = t[D];
        var x = void 0,
          $ = void 0,
          P = void 0,
          N = [],
          M = [],
          w = !1,
          A = !1,
          F = void 0,
          O = !1,
          B = null,
          W = o("WAWebFrontendMsgGetters").getAsGroupedSticker(E.unsafe());
        if (W && !_(E, l)) {
          (N.push(W), (O = c(E, n)), (B = 0), (S = m + 1));
          var q = t[S],
            U =
              q != null
                ? o("WAWebFrontendMsgGetters").getAsGroupedSticker(q.unsafe())
                : null;
          U &&
            o("WAWebMessageListAlbums").canBeGroupedAsAlbum(E, q) &&
            q !== a &&
            !_(q, l) &&
            (N.push(U),
            (T = t[S + 1]),
            (A = !0),
            (F = !0),
            c(q, n) && ((O = !0), (B = 1)));
        }
        var V = !1,
          H = o("WAWebFrontendMsgGetters").getAsBotPluginCarouselMsg(
            E.unsafe(),
          );
        if (H) {
          ((V = c(E, n)), M.push(H));
          var G = h,
            z = void 0;
          for (S = m; S < t.length - 1 && M.length < u; S++) {
            ((G = t[S]), (z = t[S + 1]));
            var j =
              z != null
                ? o("WAWebFrontendMsgGetters").getAsBotPluginCarouselMsg(
                    z.unsafe(),
                  )
                : null;
            if (j && d(G, z)) (M.push(z), c(z, n) && (V = !0));
            else break;
          }
          M.length >= 1 && ((w = !0), (T = t[S + 1]));
        }
        if (w) {
          var K;
          (s.push({
            type: "botPluginCarousel",
            botPluginCarouselId: (K = M[0].id) == null ? void 0 : K.id,
            msgs: M,
            isFocused: V,
          }),
            (m = S + 1),
            (h = t[m]),
            (y = !1));
          continue;
        }
        var Q = o("WAWebFrontendMsgGetters").getAsAlbumAsset(E.unsafe());
        if (Q && !_(E, l)) {
          N.push(Q);
          var X = h,
            Y = void 0;
          for (
            O = c(h, n), S = m;
            S < t.length - 1 &&
            N.length < o("WAWebMessageListAlbums").ALBUM_MAX_SIZE;
            S++
          ) {
            ((X = t[S]), (Y = t[S + 1]));
            var J =
              Y != null
                ? o("WAWebFrontendMsgGetters").getAsAlbumAsset(Y.unsafe())
                : null;
            if (
              J &&
              o("WAWebMessageListAlbums").canBeGroupedAsAlbum(X, Y) &&
              Y !== a &&
              !_(Y, l)
            )
              (N.push(J), c(Y, n) && (O = !0));
            else break;
          }
          N.length >= o("WAWebMessageListAlbums").ALBUM_MIN_SIZE &&
            ((A = !0), (F = !1), (T = t[S + 1]));
        }
        if (T) {
          var Z = T;
          ((P = r("WAWebMessageListDayOfMsg")(T)),
            ($ = P === b),
            (x =
              $ &&
              o("WAWebMessageListAlbums").canBeGroupedWithNext(E, Z) &&
              T !== a),
            $ || g(b, P));
        } else ((x = !1), ($ = !1), (P = 0));
        if (A) {
          var ee = void 0;
          (F === !0
            ? (ee = N.reduce(function (e, t) {
                return e + "-" + t.id.id;
              }, "grouped-sticker-"))
            : (ee = f(N)),
            s.push({
              type: "album",
              msgs: N,
              albumId: ee,
              groupedWithPrev: y,
              groupedWithNext: x,
              isFocusedAlbum: O,
              focusedMsgIndex: B,
            }));
          var te = N[N.length - 1],
            ne = r("WAWebMaybeInsertHistoryBundleInfo")(te, T);
          (ne != null && s.push(ne),
            (m = S + 1),
            (h = t[m]),
            (y = x),
            (C = $),
            (b = P));
          continue;
        }
        s.push({
          type: "msg",
          msg: E,
          isFocused: c(E, n),
          groupedWithPrev: y,
          groupedWithNext: x,
          isFollowUpReply: I,
        });
        var re = r("WAWebMaybeInsertHistoryBundleInfo")(E, T);
        (re != null && s.push(re), m++, (y = x), (C = $), (b = P), (h = T));
      }
      return p(s, e);
    }
    function p(e, t) {
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
    function _(e, t) {
      return t == null ? !0 : e.t > t.t;
    }
    function f(e) {
      var t = e.length,
        n = e[0] ? e[0].id.id : "",
        r = e[t - 1] ? e[t - 1].id.id : "";
      return "album-" + n + "-" + r + "-" + t;
    }
    function g(e, t) {
      if (!(e <= t)) {
        var n = Math.floor((e - t) / o("WATimeUtils").DAY_SECONDS);
        n >= 2 && h(e, t, n);
      }
    }
    var h = o("WAThrottle").throttle(
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
    l.default = m;
  },
  98,
);
