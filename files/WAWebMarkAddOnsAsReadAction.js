__d(
  "WAWebMarkAddOnsAsReadAction",
  [
    "WAWebCommentCollection",
    "WAWebMarkAddOnsAsReadJob",
    "WAWebMessageAddOnType",
    "WAWebPollsPollVoteCollection",
    "WAWebReactionsCollection",
    "WAWebSendReadReceiptJob",
    "asyncToGeneratorRuntime",
    "err",
    "lodash",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("lodash").flatten(Array.from(e.values()));
          if (t.length !== 0) {
            yield o("WAWebSendReadReceiptJob").sendAddOnReadReceipts(t);
            var n = new Map();
            for (var a of e) {
              var i = a[0],
                l = a[1];
              n.set(
                i,
                l.map(function (e) {
                  var t = e.msgKey;
                  return t;
                }),
              );
            }
            yield o("WAWebMarkAddOnsAsReadJob").markAddOnsAsReadJob(n);
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      for (var t of e) {
        var n = t[0],
          a = t[1];
        switch (n) {
          case o("WAWebMessageAddOnType").MessageAddOnType.Reaction:
            o(
              "WAWebReactionsCollection",
            ).ReactionsCollection.markReactionsAsRead(a);
            break;
          case o("WAWebMessageAddOnType").MessageAddOnType.PollVote:
            for (var i of a) {
              var l = o(
                "WAWebPollsPollVoteCollection",
              ).PollVoteCollection.getByMsgKey(i);
              l != null && (l.read = !0);
            }
            break;
          case o("WAWebMessageAddOnType").MessageAddOnType.Comment:
            for (var s of a) {
              var u = o("WAWebCommentCollection").CommentCollection.getByMsgKey(
                s,
              );
              u != null && (u.read = !0);
            }
            break;
          default:
            if (a != null && a.length > 0)
              throw r("err")("Unsupported add-on type: " + String(n));
        }
      }
    }
    function m() {
      var e = o("react-compiler-runtime").c(5),
        t = r("useLazyRef")(p),
        n;
      e[0] !== t
        ? ((n = function () {
            !document.hasFocus() ||
              t.current.size === 0 ||
              (u(t.current), (t.current = new Map()));
          }),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]);
      var a = n,
        i;
      e[2] !== a || e[3] !== t
        ? ((i = function (n) {
            var e,
              r = n.addOns,
              o = n.addOnType,
              i = t.current.get(o);
            (i == null && ((i = []), t.current.set(o, i)),
              (e = i).push.apply(e, r),
              a());
          }),
          (e[2] = a),
          (e[3] = t),
          (e[4] = i))
        : (i = e[4]);
      var l = i;
      return (o("useWAWebListener").useListener(window, "focus", a), l);
    }
    function p() {
      return new Map();
    }
    ((l.markAddOnsAsReadUiAction = d), (l.useMarkAddOnsAsRead = m));
  },
  98,
);
