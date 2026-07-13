__d(
  "WAWebWindowsHybridBridgePictures.v2583",
  [
    "WAJids",
    "WALogger",
    "WAWebLidMigrationUtils",
    "WAWebProfilePicThumbCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (function () {
        function t(t) {
          var r = this;
          ((this.$2 = (function () {
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
                      r.$1.setProfilePictures(
                        JSON.stringify([
                          {
                            eurl: l == null ? void 0 : l.eurl,
                            id: a.id.toString(),
                          },
                        ]),
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
                    r.$1.setProfilePictures(
                      JSON.stringify([
                        {
                          eurl: (d = c) == null ? void 0 : d.eurl,
                          id: u.toString(),
                        },
                      ]),
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
                    r.$1.setProfilePictures(
                      JSON.stringify([
                        {
                          eurl: (m = c) == null ? void 0 : m.eurl,
                          id: p.toString(),
                        },
                      ]),
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
            t.addEventListener("verifyPictureEvent", this.$2),
            t.subscribe(null));
        }
        var r = t.prototype;
        return (
          (r.notifyUpdate = function (t) {
            if (t != null) {
              if (o("WAJids").validateGroupJid(t.id.toString())) {
                this.$1.setProfilePictures(
                  JSON.stringify([{ eurl: t.eurl, id: t.id.toString() }]),
                );
                return;
              }
              if (t.id.isUser()) {
                var e = o("WAWebLidMigrationUtils").toPn(t.id),
                  n = o("WAWebLidMigrationUtils").toLid(t.id);
                if (e == null) {
                  o("WALogger").ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[WindowsHybridBridgePictures] PN WID is null",
                      ])),
                  );
                  return;
                }
                if (n == null) {
                  o("WALogger").ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[WindowsHybridBridgePictures] LID WID is null for PN WID: ",
                        "",
                      ])),
                    e,
                  );
                  return;
                }
                (this.$1.setProfilePictures(
                  JSON.stringify([{ eurl: t.eurl, id: e.toString() }]),
                ),
                  this.$1.setProfilePictures(
                    JSON.stringify([{ eurl: t.eurl, id: n.toString() }]),
                  ));
              }
            }
          }),
          t
        );
      })();
    l.WindowsHybridBridgePictures_v2583 = d;
  },
  98,
);
