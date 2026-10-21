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
          for (var r, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (r = t.call.apply(t, [this].concat(i)) || this),
            (r.findImpl = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n,
                    a = r.get(t);
                  if (
                    a != null &&
                    a.privacyDisclosureModal != null &&
                    a.endDate != null &&
                    ((n = a.endDate) == null ? void 0 : n.getTime()) >
                      Date.now() &&
                    Date.now() - a.lastUpdated.getTime() < e
                  )
                    return a;
                  var i = yield o(
                    "WAWebGetUserDisclosuresContentsAction",
                  ).getDisclosuresContentAction(parseInt(t, 10));
                  if (i != null)
                    return r.gadd(
                      {
                        id: t,
                        policyVersion: i.policyVersion,
                        privacyDisclosureModal: i.privacyDisclosureModal,
                        endDate: i.endDate,
                        lastUpdated: new Date(),
                      },
                      { merge: !0 },
                    );
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            babelHelpers.assertThisInitialized(r) ||
              babelHelpers.assertThisInitialized(r)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.find = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, n) {
                var r,
                  o = this.get(e);
                if (o == null || o.privacyDisclosureModal != null)
                  return t.prototype.find.call(this, e, n);
                var a = yield this.update(e, n);
                return (r = Array.isArray(a) ? a[0] : a) != null ? r : o;
              },
            );
            function r(t, n) {
              return e.apply(this, arguments);
            }
            return r;
          })()),
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
