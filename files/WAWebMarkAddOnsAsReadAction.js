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
      var e = r("useLazyRef")(function () {
          return new Map();
        }),
        t = s(
          function () {
            !document.hasFocus() ||
              e.current.size === 0 ||
              (u(e.current), (e.current = new Map()));
          },
          [e],
        ),
        n = s(
          function (n) {
            var r,
              o = n.addOns,
              a = n.addOnType,
              i = e.current.get(a);
            (i == null && ((i = []), e.current.set(a, i)),
              (r = i).push.apply(r, o),
              t());
          },
          [t, e],
        );
      return (o("useWAWebListener").useListener(window, "focus", t), n);
    }
    ((l.markAddOnsAsReadUiAction = d), (l.useMarkAddOnsAsRead = m));
  },
  98,
);
