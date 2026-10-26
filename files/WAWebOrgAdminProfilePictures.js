__d(
  "WAWebOrgAdminProfilePictures",
  [
    "Promise",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebContactSyncPrivacyHints",
    "WAWebGetProfilePicJob",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = Array.from(new Set(t));
          if (a.length === 0)
            return {
              profilePictureURLByLID: new Map(),
              unavailableLIDs: new Set(),
            };
          try {
            var i,
              l = new Map(),
              m = new Set(),
              p = new (o("WAWebUsync").USyncQuery)()
                .withContext("interactive")
                .withMode("query")
                .withPictureProtocol(),
              f = 0,
              g = [];
            for (var h of a)
              try {
                var y = o("WAWebWidFactory").createUserLidOrThrow(h, "lid");
                l.set(y.toString(), h);
                var C = new (o("WAWebUsyncUser").USyncUser)().withId(y);
                (g.push({ user: C, wid: y }), p.withUser(C));
              } catch (e) {
                (f++, m.add(h));
              }
            if (
              (f > 0 &&
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[org_admin] skipped ",
                        " invalid member LIDs",
                      ])),
                    f,
                  )
                  .sendLogs("org-admin-profile-picture-invalid-lids"),
              l.size === 0)
            )
              return { profilePictureURLByLID: new Map(), unavailableLIDs: m };
            yield o("WAWebContactSyncPrivacyHints").attachUsyncPrivacyHints(g);
            var b = yield p.execute(),
              v = (i = b.error.all) != null ? i : b.error.picture;
            if (v != null)
              throw (
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[org_admin] profile picture USync returned ",
                        "",
                      ])),
                    v.errorCode,
                  )
                  .sendLogs("org-admin-profile-picture-usync-error"),
                r("err")("Organization member profile picture USync failed")
              );
            var S = new Map();
            return (
              yield (d || (d = n("Promise"))).all(
                b.list.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = e.id,
                          n = t == null ? null : l.get(t.toString());
                        if (n != null) {
                          var a = e.picture;
                          if (typeof (a == null ? void 0 : a.id) != "number") {
                            (a == null || _(a.errorCode)) && m.add(n);
                            return;
                          }
                          try {
                            var i = yield o(
                                "WAWebGetProfilePicJob",
                              ).getProfilePic(t, { preview: !0 }),
                              s = i.eurl;
                            s === "" ? m.add(n) : S.set(n, s);
                          } catch (e) {
                            e instanceof
                              o("WAWebBackendErrors").ServerStatusCodeError &&
                            _(e.status)
                              ? m.add(n)
                              : o("WALogger")
                                  .ERROR(
                                    u ||
                                      (u =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "[org_admin] failed to resolve member profile picture",
                                          ],
                                        )),
                                  )
                                  .catching(r("getErrorSafe")(e))
                                  .sendLogs(
                                    "org-admin-profile-picture-fetch-failed",
                                  );
                          }
                        }
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              ),
              { profilePictureURLByLID: S, unavailableLIDs: m }
            );
          } catch (e) {
            var R = r("getErrorSafe")(e);
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[org_admin] failed to fetch member profile picture metadata",
                    ])),
                )
                .catching(R)
                .sendLogs("org-admin-profile-picture-usync-failed"),
              R
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return e === 401 || e === 404;
    }
    l.fetchOrgAdminProfilePictures = m;
  },
  98,
);
