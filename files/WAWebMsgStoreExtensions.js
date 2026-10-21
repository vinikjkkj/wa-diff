__d(
  "WAWebMsgStoreExtensions",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
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
      return o("WAWebPollNameHashSeed").maybeSeedInitialPollNameHashes(e);
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebPollNameHashAppend").appendPollNameHashesForEdits(e),
            yield o(
              "WAWebResolvePendingPollUpdates",
            ).resolvePendingUpdatesForPollEdits(e));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return (delete e.pollNameHashHistory, e);
    }
    function _(e) {
      return e.length === 0
        ? (s || (s = n("Promise"))).resolve()
        : g(function (t) {
            var n = t.applyStoredPollAddOptionsForMsgs;
            return n(e);
          });
    }
    function f(e) {
      return e.length === 0
        ? (s || (s = n("Promise"))).resolve()
        : g(function (t) {
            var n = t.applyAttachedPollAddOptions;
            return n(e);
          });
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
        h.apply(this, arguments)
      );
    }
    ((l.prepareNewMsgsForStore = c),
      (l.handleStoredMessageEdits = d),
      (l.omitColumnsPreservedAcrossEdits = p),
      (l.handleStoredSyncedMsgs = _),
      (l.handleAttachedAssociatedMsgs = f));
  },
  98,
);
