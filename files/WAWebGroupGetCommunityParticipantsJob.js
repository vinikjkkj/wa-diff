__d(
  "WAWebGroupGetCommunityParticipantsJob",
  [
    "Promise",
    "WALogger",
    "WASmaxGroupsGetLinkedGroupsParticipantsRPC",
    "WAWebBackendErrors",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = yield o(
            "WASmaxGroupsGetLinkedGroupsParticipantsRPC",
          ).sendGetLinkedGroupsParticipantsRPC({
            iqTo: o("WAWebWidToJid").widToGroupJid(t),
          });
          e: {
            var a = r;
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.name === "GetLinkedGroupsParticipantsResponseSuccess" &&
              "value" in a
            ) {
              var i = a.value,
                l = i.linkedGroupsParticipantsParticipant.map(function (e) {
                  return o("WAWebWidFactory").createWid(e.jid);
                });
              return l;
            }
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.name === "GetLinkedGroupsParticipantsResponseClientError" &&
              "value" in a
            ) {
              var c = a.value,
                d = c.errorGetLinkedGroupsParticipantsClientErrors.value;
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "getLinkedGroupsParticipants failed: ",
                      ":",
                      "",
                    ])),
                  d.code,
                  d.text,
                ),
                (u || (u = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(d.code),
                    d.text,
                  ),
                )
              );
              break e;
            }
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.name === "GetLinkedGroupsParticipantsResponseServerError" &&
              "value" in a
            ) {
              var m = a.value,
                p = m.errorServerErrors.value;
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "getLinkedGroupsParticipants failed: ",
                      ":",
                      "",
                    ])),
                  p.code,
                  p.text,
                ),
                (u || (u = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(p.code),
                    p.text,
                  ),
                )
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                a,
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.getCommunityParticipants = c;
  },
  98,
);
