__d(
  "WormIDbConsts",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "InvalidStateError",
      l = "AbortError",
      s = "NotFoundError",
      u = "UnknownError",
      c = new Set([e, l, s, u]),
      d = "Failed to read large IndexedDB value";
    ((i.IDB_ERROR_INVALID_STATE = e),
      (i.IDB_ERROR_NOT_FOUND = s),
      (i.IDB_ERROR_UNKNOWN = u),
      (i.IDB_ERRORS = c),
      (i.LARGE_IDB_VALUE_ERROR_MSG = d));
  },
  66,
);
