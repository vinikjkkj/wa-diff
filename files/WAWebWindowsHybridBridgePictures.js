__d(
  "WAWebWindowsHybridBridgePictures",
  [
    "WAJids",
    "WALogger",
    "WAWebLidMigrationUtils",
    "WAWebODS",
    "WAWebProfilePicThumbCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = (function () {
        function t(t) {
          var r = this;
          ((this.$3 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = JSON.parse(t);
                for (var a of n) {
                  var i;
                  if (o("WAJids").validateGroupJid(a.id.toString())) {
                    var l = o(
                      "WAWebProfilePicThumbCollection",
                    ).ProfilePicThumbCollection.get(a.id);
                    (l == null ? void 0 : l.eurl) !== a.eurl &&
                      r.$2(
                        [
                          {
                            eurl: l == null ? void 0 : l.eurl,
                            id: a.id.toString(),
                          },
                        ],
                        "verify:group",
                      );
                    continue;
                  }
                  var u = o("WAWebLidMigrationUtils").toPn(a.id);
                  if (u == null) {
                    o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[WindowsHybridBridgePictures] PN WID is null",
                        ])),
                    );
                    continue;
                  }
                  var c = o(
                    "WAWebProfilePicThumbCollection",
                  ).ProfilePicThumbCollection.get(u);
                  if (
                    (c == null &&
                      u != null &&
                      (c = yield o(
                        "WAWebProfilePicThumbCollection",
                      ).ProfilePicThumbCollection.resyncPicturesByWid([u])),
                    ((i = c) == null ? void 0 : i.eurl) !== a.eurl)
                  ) {
                    var d, m;
                    r.$2(
                      [
                        {
                          eurl: (d = c) == null ? void 0 : d.eurl,
                          id: u.toString(),
                        },
                      ],
                      "verify:user:pn",
                    );
                    var p = o("WAWebLidMigrationUtils").toLid(a.id);
                    if (p == null) {
                      o("WALogger").ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[WindowsHybridBridgePictures] LID WID is null for PN WID: ",
                            "",
                          ])),
                        u,
                      );
                      continue;
                    }
                    r.$2(
                      [
                        {
                          eurl: (m = c) == null ? void 0 : m.eurl,
                          id: p.toString(),
                        },
                      ],
                      "verify:user:lid",
                    );
                  }
                }
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })()),
            (this.$1 = t),
            t.addEventListener("verifyPictureEvent", this.$3),
            t.subscribe(null));
        }
        var a = t.prototype;
        return (
          (a.$2 = function (t, n) {
            r("WAWebODS").incr(
              "web.hybrid.bridge.pictures.send.set_profile_pictures",
            );
            var e = self.performance.now(),
              a = JSON.stringify(t),
              i = self.performance.now() - e,
              l = self.performance.now();
            this.$1.setProfilePictures(a);
            var s = self.performance.now() - l;
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[hybrid-pictures] setProfilePictures caller=",
                  " bytes=",
                  " stringify=",
                  "ms bridge=",
                  "ms",
                ])),
              n,
              a.length,
              i.toFixed(0),
              s.toFixed(0),
            );
          }),
          (a.notifyUpdate = function (t) {
            if (t != null) {
              if (o("WAJids").validateGroupJid(t.id.toString())) {
                this.$2(
                  [{ eurl: t.eurl, id: t.id.toString() }],
                  "notify:group",
                );
                return;
              }
              if (t.id.isUser()) {
                var e = o("WAWebLidMigrationUtils").toPn(t.id),
                  n = o("WAWebLidMigrationUtils").toLid(t.id);
                if (e == null) {
                  o("WALogger").ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[WindowsHybridBridgePictures] PN WID is null",
                      ])),
                  );
                  return;
                }
                if (n == null) {
                  o("WALogger").ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[WindowsHybridBridgePictures] LID WID is null for PN WID: ",
                        "",
                      ])),
                    e,
                  );
                  return;
                }
                (this.$2(
                  [{ eurl: t.eurl, id: e.toString() }],
                  "notify:user:pn",
                ),
                  this.$2(
                    [{ eurl: t.eurl, id: n.toString() }],
                    "notify:user:lid",
                  ));
              }
            }
          }),
          t
        );
      })();
    l.WindowsHybridBridgePictures = m;
  },
  98,
);
