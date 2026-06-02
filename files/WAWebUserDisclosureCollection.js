__d(
  "WAWebUserDisclosureCollection",
  [
    "WAWebBaseCollection",
    "WAWebGetUserDisclosuresContentsAction",
    "WAWebUserDisclosureModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 864e5,
      s = (function (t) {
        function n() {
          for (var n, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (n = t.call.apply(t, [this].concat(i)) || this),
            (n.findImpl = async function (t) {
              var a,
                i = n.get(t);
              if (
                i != null &&
                i.privacyDisclosureModal != null &&
                i.endDate != null &&
                ((a = i.endDate) == null ? void 0 : a.getTime()) >
                  new Date().getTime() &&
                new Date().getTime() - i.lastUpdated.getTime() < e
              )
                return i;
              var l = await o(
                "WAWebGetUserDisclosuresContentsAction",
              ).getDisclosuresContentAction(parseInt(t, 10));
              if (l != null) {
                var s = new (r("WAWebUserDisclosureModel"))({
                  id: l.disclosureId,
                  policyVersion: l.policyVersion,
                  privacyDisclosureModal: l.privacyDisclosureModal,
                  endDate: l.endDate,
                  lastUpdated: new Date(),
                });
                return (n.gadd(s, { merge: !0 }), s);
              }
            }),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.updateNoticeStage = async function (t) {
            var e = t.accepted,
              n = t.id,
              o = t.policyVersion,
              a = t.stage,
              i = new (r("WAWebUserDisclosureModel"))({
                id: n,
                policyVersion: o,
                accepted: e,
                stage: a,
                lastUpdated: new Date(),
              });
            this.gadd(i, { merge: !0 });
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    s.model = r("WAWebUserDisclosureModel");
    var u = new s();
    l.UserDisclosureCollection = u;
  },
  98,
);
