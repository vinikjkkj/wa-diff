__d(
  "WAWebResolvePendingPollUpdates",
  [
    "JSResourceForInteraction",
    "Promise",
    "WACryptoUtils",
    "WALogger",
    "WAWebAddonQueryUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebMsgType",
    "WAWebPendingPollVoteResolution",
    "WAWebPollNameHashHistoryUtils",
    "WAWebPollNameHashMismatchLogger",
    "WAWebPollNameHashUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebResolveParkedPollAddOptions",
          )
            .__setRef("WAWebResolvePendingPollUpdates")
            .load();
        }),
        "WAWebResolveParkedPollAddOptions",
      );
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(_).filter(Boolean);
          yield (c || (c = n("Promise"))).all(t.map(f));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = e.parentMsg,
        n = e.protocolMsg,
        r = n.pollName,
        a = n.id.id;
      return t.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
        t.id.remote.isNewsletter() ||
        a ===
          o("WAWebPollNameHashHistoryUtils")
            .ORIGINAL_POLL_VERSION_EDIT_STANZA_ID ||
        r == null ||
        r.length === 0
        ? null
        : { parentMsgKey: t.id, editStanzaId: a, pollName: r };
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield h(e);
          } catch (t) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[polls/tc] failed to resolve parked poll updates for edit ",
                    "",
                  ])),
                e.editStanzaId,
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("poll-tc-resolve-failed");
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.editStanzaId,
            n = e.parentMsgKey,
            r = e.pollName,
            a = yield o("WAWebPollNameHashUtils").tryComputePollNameHash(r);
          if (a != null) {
            var i = yield o(
                "WAWebPendingPollVoteResolution",
              ).drainAcrossAddressingModes(n, "edit", t),
              l = i.filter(function (e) {
                return v(e, a);
              });
            yield C(
              l.filter(function (e) {
                return e.payloadType === "add-option";
              }),
              n,
            );
            var s = [],
              u = [];
            for (var c of l)
              if (c.payloadType !== "add-option") {
                if (
                  o("WAWebPendingPollVoteResolution").hasUnresolvedOptions(c)
                ) {
                  u.push(c);
                  continue;
                }
                var d = L(c, n);
                d != null && s.push(d);
              }
            (s.push.apply(s, yield S(u, n)),
              yield o("WAWebPendingPollVoteResolution").attachResolvedVotes(s));
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length !== 0)
            try {
              var n = yield d(),
                a = n.resolveParkedPollAddOptions;
              yield a(e, t);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[polls/tc] failed to apply parked poll add-options",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("poll-tc-resolve-add-options-failed");
            }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return o("WACryptoUtils").uint8ArraysEqual(
        new Uint8Array(e.pollNameHash),
        t,
      )
        ? !0
        : (o("WAWebPollNameHashMismatchLogger").logPollNameHashMismatch(
            e.payloadType === "add-option"
              ? "pending-resolution-add-option"
              : "pending-resolution-vote",
          ),
          !1);
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (e.length === 0) return [];
          var r = (yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
            t,
          ])).get(t.toString());
          return o("WAWebPendingPollVoteResolution").settleParkedVotes(
            e,
            t,
            (n = r == null ? void 0 : r.pollOptions) != null ? n : [],
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(t, n) {
      try {
        return o("WAWebPendingPollVoteResolution").voteFromPendingRow(t, n);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls/tc] dropping malformed parked poll vote",
                ])),
            )
            .sendLogs("poll-tc-malformed-parked-vote"),
          null
        );
      }
    }
    l.resolvePendingUpdatesForPollEdits = m;
  },
  98,
);
