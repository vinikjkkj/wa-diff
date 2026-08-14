__d(
  "ReStoreVaulting",
  ["cr:2075", "cr:2151", "cr:2203"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return n("cr:2075") != null ? n("cr:2075").vault(e) : e;
    }
    function s(e) {
      return n("cr:2075") != null ? n("cr:2075").unvault(e) : e;
    }
    function u(e, t) {
      return n("cr:2151") != null && n("cr:2203") != null
        ? n("cr:2151").unvaultDbRow(
            e,
            t,
            n("cr:2203").PERSISTED_DB_VAULT_DEFINITIONS,
          )
        : e;
    }
    function c(e, t) {
      return n("cr:2151") != null && n("cr:2203") != null
        ? n("cr:2151").vaultDbRow(
            e,
            t,
            n("cr:2203").PERSISTED_DB_VAULT_DEFINITIONS,
          )
        : e;
    }
    ((l.maybeVault = e),
      (l.maybeUnvault = s),
      (l.maybeUnvaultDbRow = u),
      (l.maybeVaultDbRow = c));
  },
  98,
);
