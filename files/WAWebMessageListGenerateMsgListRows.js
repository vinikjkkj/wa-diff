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
    function m(e, t, n, a, i, l, s) {
      var m = [],
        h = e.pendingSends != null ? (s == null ? void 0 : s.beforeMsg) : null,
        y = function (t) {
          return t != null && (t === a || t === h);
        },
        C = 0,
        b;
      for (C = 0; !b && C < t.length; C++) b = t[C];
      C--;
      for (
        var v = !1,
          S = !1,
          R = b ? r("WAWebMessageListDayOfMsg")(b) : 0,
          L = 0,
          E = C,
          k = null,
          I = null;
        b;
      ) {
        var T = b;
        (S || m.push({ type: "date", msg: T, count: L++ }),
          T === a && e.unread && m.push({ type: "unread", unreadCount: i }),
          T === h && m.push({ type: "pendingSends" }));
        var D = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(T.unsafe()),
          x =
            (k != null && k.equals(D)) ||
            (D != null && I != null && D.key.equals(I));
        ((k = D), (I = T.id));
        for (var $ = void 0, P = C + 1; !$ && P < t.length; P++) $ = t[P];
        var N = void 0,
          M = void 0,
          w = void 0,
          A = [],
          F = [],
          O = !1,
          B = !1,
          W = void 0,
          q = !1,
          U = null,
          V = o("WAWebFrontendMsgGetters").getAsGroupedSticker(T.unsafe());
        if (V && !_(T, l)) {
          (A.push(V), (q = c(T, n)), (U = 0), (E = C + 1));
          var H = t[E],
            G =
              H != null
                ? o("WAWebFrontendMsgGetters").getAsGroupedSticker(H.unsafe())
                : null;
          G &&
            o("WAWebMessageListAlbums").canBeGroupedAsAlbum(T, H) &&
            !y(H) &&
            !_(H, l) &&
            (A.push(G),
            ($ = t[E + 1]),
            (B = !0),
            (W = !0),
            c(H, n) && ((q = !0), (U = 1)));
        }
        var z = !1,
          j = o("WAWebFrontendMsgGetters").getAsBotPluginCarouselMsg(
            T.unsafe(),
          );
        if (j) {
          ((z = c(T, n)), F.push(j));
          var K = b,
            Q = void 0;
          for (E = C; E < t.length - 1 && F.length < u; E++) {
            ((K = t[E]), (Q = t[E + 1]));
            var X =
              Q != null
                ? o("WAWebFrontendMsgGetters").getAsBotPluginCarouselMsg(
                    Q.unsafe(),
                  )
                : null;
            if (X && d(K, Q)) (F.push(Q), c(Q, n) && (z = !0));
            else break;
          }
          F.length >= 1 && ((O = !0), ($ = t[E + 1]));
        }
        if (O) {
          var Y;
          (m.push({
            type: "botPluginCarousel",
            botPluginCarouselId: (Y = F[0].id) == null ? void 0 : Y.id,
            msgs: F,
            isFocused: z,
          }),
            (C = E + 1),
            (b = t[C]),
            (v = !1));
          continue;
        }
        var J = o("WAWebFrontendMsgGetters").getAsAlbumAsset(T.unsafe());
        if (J && !_(T, l)) {
          A.push(J);
          var Z = b,
            ee = void 0;
          for (
            q = c(b, n), E = C;
            E < t.length - 1 &&
            A.length < o("WAWebMessageListAlbums").ALBUM_MAX_SIZE;
            E++
          ) {
            ((Z = t[E]), (ee = t[E + 1]));
            var te =
              ee != null
                ? o("WAWebFrontendMsgGetters").getAsAlbumAsset(ee.unsafe())
                : null;
            if (
              te &&
              o("WAWebMessageListAlbums").canBeGroupedAsAlbum(Z, ee) &&
              !y(ee) &&
              !_(ee, l)
            )
              (A.push(te), c(ee, n) && (q = !0));
            else break;
          }
          A.length >= o("WAWebMessageListAlbums").ALBUM_MIN_SIZE &&
            ((B = !0), (W = !1), ($ = t[E + 1]));
        }
        if ($) {
          var ne = $;
          ((w = r("WAWebMessageListDayOfMsg")($)),
            (M = w === R),
            (N =
              M &&
              o("WAWebMessageListAlbums").canBeGroupedWithNext(T, ne) &&
              !y($)),
            M || g(R, w));
        } else ((N = !1), (M = !1), (w = 0));
        if (B) {
          var re = void 0;
          (W === !0
            ? (re = A.reduce(function (e, t) {
                return e + "-" + t.id.id;
              }, "grouped-sticker-"))
            : (re = f(A)),
            m.push({
              type: "album",
              msgs: A,
              albumId: re,
              groupedWithPrev: v,
              groupedWithNext: N,
              isFocusedAlbum: q,
              focusedMsgIndex: U,
            }));
          var oe = A[A.length - 1],
            ae = r("WAWebMaybeInsertHistoryBundleInfo")(oe, $);
          (ae != null && m.push(ae),
            (C = E + 1),
            (b = t[C]),
            (v = N),
            (S = M),
            (R = w));
          continue;
        }
        m.push({
          type: "msg",
          msg: T,
          isFocused: c(T, n),
          groupedWithPrev: v,
          groupedWithNext: N,
          isFollowUpReply: x,
        });
        var ie = r("WAWebMaybeInsertHistoryBundleInfo")(T, $);
        (ie != null && m.push(ie), C++, (v = N), (S = M), (R = w), (b = $));
      }
      return (
        s != null &&
          s.beforeMsg == null &&
          e.pendingSends != null &&
          m.push({ type: "pendingSends" }),
        p(m, e)
      );
    }
    function p(e, t) {
      var n = t.botPluginCarousel,
        a = t.date,
        i = t.historyBundleInfo,
        l = t.msgGroup,
        u = t.pendingSends,
        c = t.unread,
        d = [],
        m = [],
        p = function () {
          m.length > 0 && (d.push(l(m)), (m = []));
        };
      for (var _ of e)
        switch ((_.type !== "msg" && _.type !== "album" && p(), _.type)) {
          case "msg":
          case "album":
            (m.push(_), _.groupedWithNext || p());
            break;
          case "date": {
            d.push(
              a(
                _.msg,
                _.count,
                o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(_.msg) !=
                  null,
              ),
            );
            break;
          }
          case "unread":
            d.push(c(_.unreadCount));
            break;
          case "pendingSends":
            u != null && d.push(u());
            break;
          case "botPluginCarousel":
            {
              var f = _.type,
                g = babelHelpers.objectWithoutPropertiesLoose(_, s);
              d.push(n(g));
            }
            break;
          case "historyBundleInfo":
            d.push(i(_.authorName, _.bundleKey));
            break;
          default:
            var h = _.type;
            throw r("err")("Invalid message list row type " + _.type);
        }
      return d;
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
