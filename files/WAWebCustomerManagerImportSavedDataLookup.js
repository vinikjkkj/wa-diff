__d(
  "WAWebCustomerManagerImportSavedDataLookup",
  [
    "WAJids",
    "WALogger",
    "WAWebContactImportFileProcessor",
    "WAWebContactManagerCustomerProfilesQuery",
    "WAWebCustomerManagerImportLeadStageLookup",
    "WAWebDBCustomerDataDatabaseApi",
    "WAWebLidAwareContactsDB",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    async function _(e, t, n) {
      var r, o;
      n === void 0 && (n = []);
      var a = f(n),
        i = await g(e),
        l =
          i != null
            ? await Promise.all([C(e, t, a), b(e), v(e)])
            : [null, null, null],
        s = l[0],
        u = l[1],
        c = l[2],
        d = new Map(
          (i != null ? i : []).map(function (e) {
            return [e.chatJid, e];
          }),
        );
      return {
        complete: i != null && s != null && u != null && c != null,
        leadStagesByLid: c != null ? c : new Map(),
        legacyByLid: u != null ? u : new Map(),
        physicalNamesByPhoneJid:
          (r = s == null ? void 0 : s.physicalNamesByPhoneJid) != null
            ? r
            : new Map(),
        profiles: d,
        savedNamesByContactRowId:
          (o = s == null ? void 0 : s.savedNamesByContactRowId) != null
            ? o
            : new Map(),
      };
    }
    function f(e) {
      return e.flatMap(function (e) {
        var t = o("WAWebWidFactory").createUserWidOrThrow(e);
        return [t.toJid(), t.toString()];
      });
    }
    async function g(t) {
      try {
        var n = await h(t);
        return (
          n == null &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] incomplete existing-customer lookup for ",
                    " candidates; verified rows require a retry",
                  ])),
                t.length,
              )
              .sendLogs("cm-import-saved-data-profile-lookup-incomplete"),
          n
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] existing-customer lookup failed for ",
                  " candidates; verified rows require a retry",
                ])),
              t.length,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("cm-import-saved-data-profile-lookup-failed"),
          null
        );
      }
    }
    function h(e) {
      return y(e, 0, []);
    }
    async function y(e, t, n) {
      if (t >= e.length) return n;
      var r =
          t +
          o("WAWebContactManagerCustomerProfilesQuery")
            .MAX_COMPLETE_PROFILE_RECORDS,
        a = await o(
          "WAWebContactManagerCustomerProfilesQuery",
        ).fetchCompleteCustomerProfileRecords({ candidateLids: e.slice(t, r) });
      return a == null ? null : (n.push.apply(n, a), y(e, r, n));
    }
    async function C(e, t, n) {
      try {
        var a = new Set();
        for (var i of t) {
          var l = o("WAWebContactImportFileProcessor").normalizePhoneNumber(i);
          if (l !== "") {
            var s = o("WAWebWidFactory").createUserWidOrThrow(
              o("WAJids").toPhoneUserJid(l),
            );
            (a.add(s.toJid()), a.add(s.toString()));
          }
        }
        for (var d of n) a.add(d);
        var m = Array.from(a),
          p = await Promise.all([
            r("WAWebLidAwareContactsDB").bulkGet(e),
            r("WAWebLidAwareContactsDB").bulkGetPhysicalPhoneRows(m),
          ]),
          _ = p[0],
          f = p[1];
        if (_.length !== e.length || f.length !== m.length)
          return (
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] incomplete saved contact lookup; verified rows require a retry",
                  ])),
              )
              .sendLogs("cm-import-saved-contact-lookup-incomplete"),
            null
          );
        var g = new Map();
        _.forEach(function (t, n) {
          var r,
            o =
              t == null || (r = t.name) == null
                ? void 0
                : r.trim().replace(/\s+/g, " ");
          o != null && o !== "" && g.set(e[n], o);
        });
        var h = new Map();
        return (
          f.forEach(function (e, t) {
            var n,
              r =
                e == null || (n = e.name) == null
                  ? void 0
                  : n.trim().replace(/\s+/g, " ");
            r != null && r !== "" && h.set(m[t], r);
          }),
          { physicalNamesByPhoneJid: h, savedNamesByContactRowId: g }
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] saved contact lookup failed; verified rows require a retry",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("cm-import-saved-contact-lookup-failed"),
          null
        );
      }
    }
    async function b(e) {
      try {
        var t = await o(
          "WAWebDBCustomerDataDatabaseApi",
        ).getCustomerDataByChatJids(e);
        if (t.length !== e.length)
          return (
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] incomplete legacy customer data lookup; verified rows require a retry",
                  ])),
              )
              .sendLogs("cm-import-legacy-data-lookup-incomplete"),
            null
          );
        var n = new Map();
        return (
          t.forEach(function (t, r) {
            t != null && n.set(e[r], t);
          }),
          n
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] legacy customer data lookup failed; verified rows require a retry",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("cm-import-legacy-data-lookup-failed"),
          null
        );
      }
    }
    async function v(e) {
      try {
        return await o(
          "WAWebCustomerManagerImportLeadStageLookup",
        ).readCustomerManagerImportLeadStages(e);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] local Lead stage lookup failed; verified rows require a retry",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("cm-import-lead-stage-lookup-failed"),
          null
        );
      }
    }
    ((l.loadCustomerLookup = _), (l.fetchCompleteProfileRecordsInBatches = h));
  },
  98,
);
