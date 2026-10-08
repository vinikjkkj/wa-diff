__d(
  "WAWebOrgAdminProfilePictures",
  [
    "Promise",
    "WALogger",
    "WAWebBackendErrors",
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
              f = 0;
            for (var g of a)
              try {
                var h = o("WAWebWidFactory").createUserLidOrThrow(g, "lid");
                (l.set(h.toString(), g),
                  p.withUser(new (o("WAWebUsyncUser").USyncUser)().withId(h)));
              } catch (e) {
                (f++, m.add(g));
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
            var y = yield p.execute(),
              C = (i = y.error.all) != null ? i : y.error.picture;
            if (C != null)
              throw (
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[org_admin] profile picture USync returned ",
                        "",
                      ])),
                    C.errorCode,
                  )
                  .sendLogs("org-admin-profile-picture-usync-error"),
                r("err")("Organization member profile picture USync failed")
              );
            var b = new Map();
            return (
              yield (d || (d = n("Promise"))).all(
                y.list.map(
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
                            s === "" ? m.add(n) : b.set(n, s);
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
              { profilePictureURLByLID: b, unavailableLIDs: m }
            );
          } catch (e) {
            var v = r("getErrorSafe")(e);
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[org_admin] failed to fetch member profile picture metadata",
                    ])),
                )
                .catching(v)
                .sendLogs("org-admin-profile-picture-usync-failed"),
              v
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
