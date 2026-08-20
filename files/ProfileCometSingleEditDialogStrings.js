__d(
  "ProfileCometSingleEditDialogStrings",
  ["fbt", "ProfileTypeNameForContentV2$FbtEnum"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t) {
        return t != null
          ? s._(
              /*BTDS*/ '_j{"COMMUNITY":"Edit community profile","PAGE":"Edit Page","PROFILE":"Edit profile"}',
              [s._enum(t, r("ProfileTypeNameForContentV2$FbtEnum"))],
            )
          : s._(/*BTDS*/ "Edit profile");
      },
      u = function (t) {
        return t != null && t !== "PROFILE"
          ? s._(
              /*BTDS*/ '_j{"COMMUNITY":"Describe what your community profile is about...","PAGE":"Describe what your Page is about...","PROFILE":"Describe what your profile is about..."}',
              [s._enum(t, r("ProfileTypeNameForContentV2$FbtEnum"))],
            )
          : t === "PAGE"
            ? s._(/*BTDS*/ "Describe what your Page is about...")
            : s._(/*BTDS*/ "Describe who you are");
      },
      c = function (t) {
        return t != null && t !== "PROFILE"
          ? s._(
              /*BTDS*/ '_j{"COMMUNITY":"Describe your community profile...","PAGE":"Describe your Page...","PROFILE":"Describe your profile..."}',
              [s._enum(t, r("ProfileTypeNameForContentV2$FbtEnum"))],
            )
          : t === "PAGE"
            ? s._(/*BTDS*/ "Describe your Page...")
            : s._(/*BTDS*/ "Describe yourself...");
      };
    ((l.getSingleEditDialogTitle = e),
      (l.getBioEditorPlaceholderText = u),
      (l.getDefaultBioText = c));
  },
  226,
);
