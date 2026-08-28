__d(
  "getBizInboxUnifiedThreadsQuery",
  ["BizInboxGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("BizInboxGating").shouldLoadIGDOnMsys() ? 0 : 16;
    }
    function s() {
      return !o("BizInboxGating").shouldLoadIGDOnMsys();
    }
    function u() {
      return o("BizInboxGating").shouldLoadIGDOnMsys() ? !1 : e() > 0;
    }
    function c() {
      return !o("BizInboxGating").shouldLoadIGDOnMsys();
    }
    function d() {
      return (o("BizInboxGating").shouldLoadIGDOnMsys(), !1);
    }
    ((l.getShouldUnifyContextCardQueries = s),
      (l.getShouldUnifyThreadQueries = u),
      (l.getShouldUnifyConfigQueries = c),
      (l.getShouldLazyLoadContextCardQueries = d));
  },
  98,
);
