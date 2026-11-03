__d(
  "WAWebMsgStoreExtensions",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebDBSharableEventInviteMessage",
    "WAWebLazyLoadedRetriable",
    "WAWebPollNameHashAppend",
    "WAWebPollNameHashSeed",
    "WAWebPollsGatingUtils",
    "WAWebResolvePendingPollUpdates",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebApplyStoredPollAddOptions")
            .__setRef("WAWebMsgStoreExtensions")
            .load();
        }),
        "WAWebApplyStoredPollAddOptions",
      );
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebPollNameHashSeed",
          ).maybeSeedInitialPollNameHashes(e);
          return (
            yield o(
              "WAWebDBSharableEventInviteMessage",
            ).recordSharableEventInviteMessagesFrom(t),
            t
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebPollNameHashAppend").appendPollNameHashesForEdits(e),
            yield o(
              "WAWebResolvePendingPollUpdates",
            ).resolvePendingUpdatesForPollEdits(e));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return (delete e.pollNameHashHistory, e);
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.length !== 0 &&
            (yield o(
              "WAWebDBSharableEventInviteMessage",
            ).recordSharableEventInviteMessagesFrom(e),
            yield y(function (t) {
              var n = t.applyStoredPollAddOptionsForMsgs;
              return n(e);
            }));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return e.length === 0
        ? (s || (s = n("Promise"))).resolve()
        : y(function (t) {
            var n = t.applyAttachedPollAddOptions;
            return n(e);
          });
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (o("WAWebPollsGatingUtils").isPollAddOptionReceivingEnabled())
            try {
              yield t(yield u());
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[polls] failed to load stored poll add-option handling",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("poll-add-option-apply-stored-load-failed");
            }
        })),
        C.apply(this, arguments)
      );
    }
    ((l.prepareNewMsgsForStore = c),
      (l.handleStoredMessageEdits = m),
      (l.omitColumnsPreservedAcrossEdits = _),
      (l.handleStoredSyncedMsgs = f),
      (l.handleAttachedAssociatedMsgs = h));
  },
  98,
);
