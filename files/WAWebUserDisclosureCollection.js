__d(
  "WAWebUserDisclosureCollection",
  [
    "WAWebBaseCollection",
    "WAWebGetUserDisclosuresContentsAction",
    "WAWebUserDisclosureModel",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 864e5,
      s = (function (t) {
        function a() {
          for (var a, i = arguments.length, l = new Array(i), s = 0; s < i; s++)
            l[s] = arguments[s];
          return (
            (a = t.call.apply(t, [this].concat(l)) || this),
            (a.findImpl = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n,
                    i = a.get(t);
                  if (
                    i != null &&
                    i.privacyDisclosureModal != null &&
                    i.endDate != null &&
                    ((n = i.endDate) == null ? void 0 : n.getTime()) >
                      new Date().getTime() &&
                    new Date().getTime() - i.lastUpdated.getTime() < e
                  )
                    return i;
                  var l = yield o(
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
                    return (a.gadd(s, { merge: !0 }), s);
                  }
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            babelHelpers.assertThisInitialized(a) ||
              babelHelpers.assertThisInitialized(a)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.updateNoticeStage = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.accepted,
                  n = e.id,
                  o = e.policyVersion,
                  a = e.stage,
                  i = new (r("WAWebUserDisclosureModel"))({
                    id: n,
                    policyVersion: o,
                    accepted: t,
                    stage: a,
                    lastUpdated: new Date(),
                  });
                this.gadd(i, { merge: !0 });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    s.model = r("WAWebUserDisclosureModel");
    var u = new s();
    l.UserDisclosureCollection = u;
  },
  98,
);
