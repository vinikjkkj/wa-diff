__d(
  "WAWebWindowsHybridBridgePictures",
  [
    "WAJids",
    "WALogger",
    "WAWebABProps",
    "WAWebLidMigrationUtils",
    "WAWebODS",
    "WAWebProfilePicThumbCollection",
    "WAWebWindowsHybridBridgeTrace",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = (function () {
        function t(t) {
          var n = this;
          ((this.$2 = new Map()),
            (this.$3 = null),
            (this.$5 = async function (t) {
              var r = JSON.parse(t);
              if (
                o("WAWebABProps").getABPropConfigValue(
                  "web_anr_batch_profile_picture_bridge_operations",
                )
              )
                return n.$6(r);
              for (var a of r) {
                var i;
                if (o("WAJids").validateGroupJid(a.id.toString())) {
                  var l = o(
                    "WAWebProfilePicThumbCollection",
                  ).ProfilePicThumbCollection.get(a.id);
                  (l == null ? void 0 : l.eurl) !== a.eurl &&
                    n.$4(
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
                    (c = await o(
                      "WAWebProfilePicThumbCollection",
                    ).ProfilePicThumbCollection.resyncPicturesByWid([u])),
                  ((i = c) == null ? void 0 : i.eurl) !== a.eurl)
                ) {
                  var d, m;
                  n.$4(
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
                  n.$4(
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
            }),
            (this.$1 = t),
            t.addEventListener("verifyPictureEvent", this.$5),
            t.subscribe(null));
        }
        var n = t.prototype;
        return (
          (n.$4 = function (t, n) {
            var e = this;
            r("WAWebODS").incr(
              "web.hybrid.bridge.pictures.send.set_profile_pictures",
            );
            var a = self.performance.now(),
              i = JSON.stringify(t),
              l = self.performance.now() - a,
              s = self.performance.now();
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "pictures",
                method: "setProfilePictures",
                type: "sync",
              },
              function () {
                return e.$1.setProfilePictures(i);
              },
            );
            var c = self.performance.now() - s;
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[hybrid-pictures] setProfilePictures caller=",
                  " items=",
                  " bytes=",
                  " stringify=",
                  "ms bridge=",
                  "ms",
                ])),
              n,
              t.length,
              i.length,
              l.toFixed(0),
              c.toFixed(0),
            );
          }),
          (n.$6 = async function (t) {
            var e = [];
            for (var n of t) {
              var r;
              if (o("WAJids").validateGroupJid(n.id.toString())) {
                var a = o(
                  "WAWebProfilePicThumbCollection",
                ).ProfilePicThumbCollection.get(n.id);
                (a == null ? void 0 : a.eurl) !== n.eurl &&
                  e.push({
                    eurl: a == null ? void 0 : a.eurl,
                    id: n.id.toString(),
                  });
                continue;
              }
              var i = o("WAWebLidMigrationUtils").toPn(n.id);
              if (i == null) {
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[WindowsHybridBridgePictures] PN WID is null",
                    ])),
                );
                continue;
              }
              var l = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.get(i);
              if (
                (l == null &&
                  i != null &&
                  (l = await o(
                    "WAWebProfilePicThumbCollection",
                  ).ProfilePicThumbCollection.resyncPicturesByWid([i])),
                ((r = l) == null ? void 0 : r.eurl) !== n.eurl)
              ) {
                var s, u;
                e.push({
                  eurl: (s = l) == null ? void 0 : s.eurl,
                  id: i.toString(),
                });
                var m = o("WAWebLidMigrationUtils").toLid(n.id);
                if (m == null) {
                  o("WALogger").ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[WindowsHybridBridgePictures] LID WID is null for PN WID: ",
                        "",
                      ])),
                    i,
                  );
                  continue;
                }
                e.push({
                  eurl: (u = l) == null ? void 0 : u.eurl,
                  id: m.toString(),
                });
              }
            }
            e.length > 0 && this.$4(e, "verify:batched");
          }),
          (n.notifyUpdate = function (t) {
            if (t != null) {
              if (
                o("WAWebABProps").getABPropConfigValue(
                  "web_anr_batch_profile_picture_bridge_operations",
                )
              )
                return this.$7(t);
              if (o("WAJids").validateGroupJid(t.id.toString())) {
                this.$4(
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
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[WindowsHybridBridgePictures] PN WID is null",
                      ])),
                  );
                  return;
                }
                if (n == null) {
                  o("WALogger").ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[WindowsHybridBridgePictures] LID WID is null for PN WID: ",
                        "",
                      ])),
                    e,
                  );
                  return;
                }
                (this.$4(
                  [{ eurl: t.eurl, id: e.toString() }],
                  "notify:user:pn",
                ),
                  this.$4(
                    [{ eurl: t.eurl, id: n.toString() }],
                    "notify:user:lid",
                  ));
              }
            }
          }),
          (n.$7 = function (t) {
            var e = this;
            if (o("WAJids").validateGroupJid(t.id.toString())) {
              var n = t.id.toString();
              this.$2.set(n, { eurl: t.eurl, id: n });
            } else if (t.id.isUser()) {
              var r = o("WAWebLidMigrationUtils").toPn(t.id),
                a = o("WAWebLidMigrationUtils").toLid(t.id);
              if (r == null) {
                o("WALogger").ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[WindowsHybridBridgePictures] PN WID is null",
                    ])),
                );
                return;
              }
              if (a == null) {
                o("WALogger").ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[WindowsHybridBridgePictures] LID WID is null for PN WID: ",
                      "",
                    ])),
                  r,
                );
                return;
              }
              var i = r.toString();
              this.$2.set(i, { eurl: t.eurl, id: i });
              var l = a.toString();
              this.$2.set(l, { eurl: t.eurl, id: l });
            }
            (this.$3 != null && self.clearTimeout(this.$3),
              (this.$3 = self.setTimeout(function () {
                e.$8();
              }, 1e3)));
          }),
          (n.$8 = function () {
            this.$3 = null;
            var e = Array.from(this.$2.values());
            (this.$2.clear(), e.length !== 0 && this.$4(e, "notify:batched"));
          }),
          t
        );
      })();
    l.WindowsHybridBridgePictures = g;
  },
  98,
);
