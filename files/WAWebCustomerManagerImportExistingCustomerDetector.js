__d(
  "WAWebCustomerManagerImportExistingCustomerDetector",
  [
    "WALogger",
    "WAWebContactImportTypedError",
    "WAWebContactType",
    "WAWebCustomerDataCollection",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = [],
        a = [];
      t.forEach(function (t) {
        if (t.lid == null) {
          n.push(t);
          return;
        }
        var i;
        try {
          var l = o("WAWebWidFactory").createUserWidOrThrow(t.lid);
          i = o("WAWebWidToJid").widToChatJid(l);
        } catch (a) {
          (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] failed to derive chatJid from lid=",
                  "",
                ])),
              t.lid,
            )
            .catching(r("getErrorSafe")(a))
            .sendLogs("cm-import-existing-customer-bad-lid"),
            n.push(t));
          return;
        }
        var s = o(
          "WAWebCustomerDataCollection",
        ).CustomerDataCollection.maybeGetCustomerDataByChatJid(i);
        if (
          s != null &&
          s.contactType !== o("WAWebContactType").ContactType.NONE
        ) {
          var u;
          a.push({
            errorType: o("WAWebContactImportTypedError").ExistingContactError
              .ALREADY_EXISTS,
            rowData: babelHelpers.extends({}, (u = t.rawRow) != null ? u : {}),
            rowIndex: t.rowIndex,
          });
          return;
        }
        n.push(t);
      });
      var i = a.map(function (e) {
        return babelHelpers.extends({}, e, {
          contactIndex: null,
          type: "error",
        });
      });
      return { errorList: i, validContacts: n };
    }
    l.detectExistingCustomers = s;
  },
  98,
);
