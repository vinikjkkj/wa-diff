__d(
  "WAWebMessageListGenerateMsgListRows",
  [
    "WALogger",
    "WAThrottle",
    "WATimeUtils",
    "WAWebFrontendMsgGetters",
    "WAWebInstantStackGrouping",
    "WAWebMaybeInsertHistoryBundleInfo",
    "WAWebMessageListAlbums",
    "WAWebMessageListDayOfMsg",
    "WAWebMsgGetters",
    "WAWebMsgType",
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
        C = e.pendingSends != null ? (s == null ? void 0 : s.beforeMsg) : null,
        b = function (t) {
          return t != null && (t === a || t === C);
        },
        v = 0,
        S;
      for (v = 0; !S && v < t.length; v++) S = t[v];
      v--;
      for (
        var R = !1,
          L = !1,
          E = S ? r("WAWebMessageListDayOfMsg")(S) : 0,
          k = 0,
          I = v,
          T = null,
          D = null;
        S;
      ) {
        var x = S;
        (L || m.push({ type: "date", msg: x, count: k++ }),
          x === a && e.unread && m.push({ type: "unread", unreadCount: i }),
          x === C && m.push({ type: "pendingSends" }));
        var $ = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(x.unsafe()),
          P =
            (T != null && T.equals($)) ||
            ($ != null && D != null && $.key.equals(D));
        ((T = $), (D = x.id));
        for (var N = void 0, M = v + 1; !N && M < t.length; M++) N = t[M];
        var w = void 0,
          A = void 0,
          F = void 0,
          O = [],
          B = [],
          W = !1,
          q = !1,
          U = void 0,
          V = !1,
          H = null,
          G = o("WAWebFrontendMsgGetters").getAsGroupedSticker(x.unsafe());
        if (G && !g(x, l)) {
          (O.push(G), (V = c(x, n)), (H = 0), (I = v + 1));
          var z = t[I],
            j =
              z != null
                ? o("WAWebFrontendMsgGetters").getAsGroupedSticker(z.unsafe())
                : null;
          j &&
            o("WAWebMessageListAlbums").canBeGroupedAsAlbum(x, z) &&
            !b(z) &&
            !g(z, l) &&
            (O.push(j),
            (N = t[I + 1]),
            (q = !0),
            (U = !0),
            c(z, n) && ((V = !0), (H = 1)));
        }
        var K = !1,
          Q = o("WAWebFrontendMsgGetters").getAsBotPluginCarouselMsg(
            x.unsafe(),
          );
        if (Q) {
          ((K = c(x, n)), B.push(Q));
          var X = S,
            Y = void 0;
          for (I = v; I < t.length - 1 && B.length < u; I++) {
            ((X = t[I]), (Y = t[I + 1]));
            var J =
              Y != null
                ? o("WAWebFrontendMsgGetters").getAsBotPluginCarouselMsg(
                    Y.unsafe(),
                  )
                : null;
            if (J && d(X, Y)) (B.push(Y), c(Y, n) && (K = !0));
            else break;
          }
          B.length >= 1 && ((W = !0), (N = t[I + 1]));
        }
        if (W) {
          var Z;
          (m.push({
            type: "botPluginCarousel",
            botPluginCarouselId: (Z = B[0].id) == null ? void 0 : Z.id,
            msgs: B,
            isFocused: K,
          }),
            (v = I + 1),
            (S = t[v]),
            (R = !1));
          continue;
        }
        if (x.type === o("WAWebMsgType").MSG_TYPE.INSTANT_IMAGE) {
          var ee = f(t, v, a, b),
            te = ee[ee.length - 1],
            ne = v + ee.length - 1,
            re = t[ne + 1],
            oe = re != null ? r("WAWebMessageListDayOfMsg")(re) : 0,
            ae = re != null && oe === E,
            ie =
              re != null &&
              ae &&
              o("WAWebMessageListAlbums").canBeGroupedWithNext(te, re) &&
              !b(re);
          m.push({
            type: "instantStack",
            msgs: ee,
            stackId: ee[0].id.toString(),
            groupedWithPrev: R,
            groupedWithNext: ie,
            focusedMsgIndex: _(ee, n),
          });
          var le = r("WAWebMaybeInsertHistoryBundleInfo")(te, re);
          (le != null && m.push(le),
            (v = ne + 1),
            (S = re),
            (T = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(
              te.unsafe(),
            )),
            (D = te.id),
            (R = ie),
            (L = ae),
            (E = oe));
          continue;
        }
        var se = o("WAWebFrontendMsgGetters").getAsAlbumAsset(x.unsafe());
        if (se && !g(x, l)) {
          O.push(se);
          var ue = S,
            ce = void 0;
          for (
            V = c(S, n), I = v;
            I < t.length - 1 &&
            O.length < o("WAWebMessageListAlbums").ALBUM_MAX_SIZE;
            I++
          ) {
            ((ue = t[I]), (ce = t[I + 1]));
            var de =
              ce != null
                ? o("WAWebFrontendMsgGetters").getAsAlbumAsset(ce.unsafe())
                : null;
            if (
              de &&
              o("WAWebMessageListAlbums").canBeGroupedAsAlbum(ue, ce) &&
              !b(ce) &&
              !g(ce, l)
            )
              (O.push(de), c(ce, n) && (V = !0));
            else break;
          }
          O.length >= o("WAWebMessageListAlbums").ALBUM_MIN_SIZE &&
            ((q = !0), (U = !1), (N = t[I + 1]));
        }
        if (N) {
          var me = N;
          ((F = r("WAWebMessageListDayOfMsg")(N)),
            (A = F === E),
            (w =
              A &&
              o("WAWebMessageListAlbums").canBeGroupedWithNext(x, me) &&
              !b(N)),
            A || y(E, F));
        } else ((w = !1), (A = !1), (F = 0));
        if (q) {
          var pe = void 0;
          (U === !0
            ? (pe = O.reduce(function (e, t) {
                return e + "-" + t.id.id;
              }, "grouped-sticker-"))
            : (pe = h(O)),
            m.push({
              type: "album",
              msgs: O,
              albumId: pe,
              groupedWithPrev: R,
              groupedWithNext: w,
              isFocusedAlbum: V,
              focusedMsgIndex: H,
            }));
          var _e = O[O.length - 1],
            fe = r("WAWebMaybeInsertHistoryBundleInfo")(_e, N);
          (fe != null && m.push(fe),
            (v = I + 1),
            (S = t[v]),
            (R = w),
            (L = A),
            (E = F));
          continue;
        }
        m.push({
          type: "msg",
          msg: x,
          isFocused: c(x, n),
          groupedWithPrev: R,
          groupedWithNext: w,
          isFollowUpReply: P,
        });
        var ge = r("WAWebMaybeInsertHistoryBundleInfo")(x, N);
        (ge != null && m.push(ge), v++, (R = w), (L = A), (E = F), (S = N));
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
        switch (
          (_.type !== "msg" &&
            _.type !== "album" &&
            _.type !== "instantStack" &&
            p(),
          _.type)
        ) {
          case "msg":
          case "album":
          case "instantStack":
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
      var n = e.findIndex(function (e) {
        return c(e, t);
      });
      return n >= 0 ? n : null;
    }
    function f(e, t, n, r) {
      for (var a = [e[t]], i = t + 1; i < e.length; i++) {
        var l = e[i];
        if (
          l == null ||
          r(l) ||
          !o("WAWebInstantStackGrouping").canFormInstantStack(
            a[a.length - 1],
            l,
            n,
          )
        )
          break;
        a.push(l);
      }
      return a;
    }
    function g(e, t) {
      return t == null ? !0 : e.t > t.t;
    }
    function h(e) {
      var t = e.length,
        n = e[0] ? e[0].id.id : "",
        r = e[t - 1] ? e[t - 1].id.id : "";
      return "album-" + n + "-" + r + "-" + t;
    }
    function y(e, t) {
      if (!(e <= t)) {
        var n = Math.floor((e - t) / o("WATimeUtils").DAY_SECONDS);
        n >= 2 && C(e, t, n);
      }
    }
    var C = o("WAThrottle").throttle(
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
