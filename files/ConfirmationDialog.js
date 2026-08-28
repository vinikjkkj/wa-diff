__d(
  "ConfirmationDialog",
  [
    "Event",
    "FBBrowserPasswordEncryption",
    "Form",
    "Keys",
    "Parent",
    "ge",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {},
      s = {},
      u = {
        register: function (n, r, o, a) {
          (o === void 0 && (o = "confirmed"),
            (e[n] = r),
            (s[n] = o),
            (s.pub_key_data = a));
        },
        setupConfirmation: function (n, a, i) {
          i === void 0 && (i = !1);
          var t = n.getPayload().__dialogID,
            l = e[t],
            c = !1,
            d = l.subscribe(["confirm", "cancel", "hide"], function (o) {
              if (o === "confirm") {
                u._encryptAndSend(function () {
                  var e = {};
                  ((e[s[t]] = 1),
                    s.encrypted_password !== void 0 &&
                      (e.ajax_password = s.encrypted_password),
                    Object.assign(a.data, r("Form").serialize(l.getRoot()), e),
                    a.send(),
                    l.hide(),
                    (c = !0));
                });
                return;
              }
              if (o === "cancel" || (o === "hide" && !c)) {
                var i = a.getServerDialogCancelHandler();
                try {
                  i && i(n);
                } catch (e) {
                  throw e;
                } finally {
                  a.finallyHandler(n);
                }
                if (((c = !0), o === "cancel")) return;
              }
              (delete e[t], delete s[t], d.unsubscribe());
            });
          (r("Event").listen(l.getContentRoot(), "keydown", function (e) {
            e.keyCode === r("Keys").RETURN &&
              o("Parent").byTag(e.getTarget(), "input") &&
              l.inform("confirm");
          }),
            l.show());
        },
        _encryptAndSend: function (t) {
          var e = t.bind(self),
            o = s.pub_key_data;
          if ((window.crypto || "msCrypto" in window) && o) {
            var a = r("ge")("ajax_password").value,
              i = n("FBBrowserPasswordEncryption"),
              l = Math.floor(Date.now() / 1e3).toString();
            r("promiseDone")(
              i.encryptPassword(o.keyId, o.publicKey, a, l),
              function (t) {
                ((s.encrypted_password = t), e());
              },
            );
          } else e();
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
