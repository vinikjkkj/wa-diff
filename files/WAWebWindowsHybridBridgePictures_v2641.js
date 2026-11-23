__d(
  "WAWebWindowsHybridBridgePictures.v2641",
  [
    "WAJids",
    "WALogger",
    "WAWebLidMigrationUtils",
    "WAWebODS",
    "WAWebProfilePicThumbCollection",
    "WAWebWindowsHybridBridgeTrace",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      for (var t of e) {
        var n = o(
          "WAWebProfilePicThumbCollection",
        ).ProfilePicThumbCollection.get(t);
        if (n != null) return n;
      }
      return null;
    }
    var d = (function () {
      function t(t) {
        var n = this;
        ((this.$3 = async function (t) {
          var r = JSON.parse(t);
          for (var a of r) {
            var i;
            if (o("WAJids").validateGroupJid(a.id.toString())) {
              var l = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.get(a.id);
              (l == null ? void 0 : l.eurl) !== a.eurl &&
                n.$2(
                  [{ eurl: l == null ? void 0 : l.eurl, id: a.id.toString() }],
                  "verify:group",
                );
              continue;
            }
            var s = o("WAWebLidMigrationUtils").toPn(a.id),
              u = o("WAWebLidMigrationUtils").toLid(a.id);
            if (s == null && u == null) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WindowsHybridBridgePictures] both PN and LID WID are null for record.id=",
                      "",
                    ])),
                  a.id.toString(),
                )
                .sendLogs("hybrid-pictures-verify-null-wids");
              continue;
            }
            var d = [];
            (s != null && d.push(s), u != null && d.push(u));
            var m = c(d);
            if (
              (m == null &&
                (await o(
                  "WAWebProfilePicThumbCollection",
                ).ProfilePicThumbCollection.resyncPicturesByWid(d),
                (m = c(d))),
              ((i = m) == null ? void 0 : i.eurl) !== a.eurl)
            ) {
              if (s != null) {
                var p;
                n.$2(
                  [
                    {
                      eurl: (p = m) == null ? void 0 : p.eurl,
                      id: s.toString(),
                    },
                  ],
                  "verify:user:pn",
                );
              }
              if (u != null) {
                var _;
                n.$2(
                  [
                    {
                      eurl: (_ = m) == null ? void 0 : _.eurl,
                      id: u.toString(),
                    },
                  ],
                  "verify:user:lid",
                );
              }
            }
          }
        }),
          (this.$1 = t),
          t.addEventListener("verifyPictureEvent", this.$3),
          t.subscribe(null));
      }
      var n = t.prototype;
      return (
        (n.$2 = function (t, n) {
          var e = this;
          r("WAWebODS").incr(
            "web.hybrid.bridge.pictures.send.set_profile_pictures",
          );
          var a = self.performance.now(),
            i = JSON.stringify(t),
            l = self.performance.now() - a,
            u = self.performance.now();
          o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
            { bridge: "pictures", method: "setProfilePictures", type: "async" },
            function () {
              return e.$1.setProfilePictures(i);
            },
          );
          var c = self.performance.now() - u;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
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
        (n.notifyUpdate = function (t) {
          if (t != null) {
            if (o("WAJids").validateGroupJid(t.id.toString())) {
              this.$2([{ eurl: t.eurl, id: t.id.toString() }], "notify:group");
              return;
            }
            if (t.id.isUser()) {
              var e = o("WAWebLidMigrationUtils").toPn(t.id),
                n = o("WAWebLidMigrationUtils").toLid(t.id);
              if (e == null && n == null) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[WindowsHybridBridgePictures] both PN and LID WID are null for profilePic.id=",
                        "",
                      ])),
                    t.id.toString(),
                  )
                  .sendLogs("hybrid-pictures-notify-null-wids");
                return;
              }
              (e != null &&
                this.$2([{ eurl: t.eurl, id: e.toString() }], "notify:user:pn"),
                n != null &&
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
    l.WindowsHybridBridgePictures_v2641 = d;
  },
  98,
);
