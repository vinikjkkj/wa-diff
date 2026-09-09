__d(
  "WAWebCRUDOperationsNewsletterMyVotes",
  [
    "Promise",
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebNewsletterDBUtils",
    "WAWebSchemaNewsletterMyVotes",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["newsletter-my-votes"],
          (function () {
            var a = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                var a = n[0];
                if (!r("WAWebWid").isNewsletter(t.chatJid)) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[createOrUpdateMyVote] Invalid newsletter jid ",
                        "",
                      ])),
                    t.chatJid,
                  );
                  return;
                }
                var i = yield m(t.chatJid, t.msgServerId);
                (i != null && i.serverTimestampMs > t.serverTimestampMs) ||
                  (yield a.createOrReplace(t));
              },
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
        );
    }
    function c(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["newsletter-my-votes"],
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t[0],
                  o = new Map(),
                  a = r("compactMap")(e, function (e) {
                    if (r("WAWebWid").isNewsletter(e.chatJid))
                      return (
                        o.set(e.chatJid + "-" + e.msgServerId, e),
                        [e.chatJid, e.msgServerId]
                      );
                  }),
                  i = yield n.anyOf(["chatJid", "msgServerId"], a);
                (i.forEach(function (e) {
                  var t = e.chatJid + "-" + e.msgServerId,
                    n = o.get(t);
                  n != null &&
                    n.serverTimestampMs < e.serverTimestampMs &&
                    o.delete(t);
                }),
                  yield n.bulkCreateOrReplace(Array.from(o.values())));
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    var d = 100;
    function m(e, t) {
      return !Number.isSafeInteger(t) ||
        t < d ||
        t >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND
        ? (s || (s = n("Promise"))).resolve(null)
        : o("WAWebSchemaNewsletterMyVotes").getTable().get([e, t]);
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield m(e.chatJid, e.msgServerId);
          t != null && (yield u(babelHelpers.extends({}, t, e)));
        })),
        _.apply(this, arguments)
      );
    }
    ((l.createOrUpdateMyVote = u),
      (l.bulkCreateOrUpdateMyVotes = c),
      (l.getMyVote = m),
      (l.updateMyVote = p));
  },
  98,
);
