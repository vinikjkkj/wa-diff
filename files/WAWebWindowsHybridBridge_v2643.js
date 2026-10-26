__d(
  "WAWebWindowsHybridBridge.v2643",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2643",
    "WAWebWindowsHybridBridgeAbProps.v2643",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2643",
    "WAWebWindowsHybridBridgeConnection.v2643",
    "WAWebWindowsHybridBridgeContacts.v2643",
    "WAWebWindowsHybridBridgeDebugFeatures.v2643",
    "WAWebWindowsHybridBridgeLinksPreview.v2643",
    "WAWebWindowsHybridBridgeMediaFiles.v2643",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2643",
    "WAWebWindowsHybridBridgeMetaConfig.v2643",
    "WAWebWindowsHybridBridgeNativeAppState.v2643",
    "WAWebWindowsHybridBridgeOds.v2643",
    "WAWebWindowsHybridBridgePictures.v2643",
    "WAWebWindowsHybridBridgePreferences.v2643",
    "WAWebWindowsHybridBridgeRateTheApp.v2643",
    "WAWebWindowsHybridBridgeRingtone.v2643",
    "WAWebWindowsHybridBridgeScalingControl.v2643",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2643",
    "WAWebWindowsHybridBridgeSharesheet.v2643",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2643",
    "WAWebWindowsHybridBridgeTouchpadFix.v2643",
    "WAWebWindowsHybridBridgeVoip.v2643",
    "WAWebWindowsHybridBridgeWam.v2643",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2643",
          ).WindowsHybridBridgeAbProps_v2643)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2643",
          ).WindowsHybridBridgeWam_v2643)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2643",
          ).WindowsHybridBridgePreferences_v2643)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2643",
          ).WindowsHybridBridgeScalingControl_v2643)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2643",
          ).WindowsHybridBridgeOds_v2643)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2643",
          ).WindowsHybridBridgePictures_v2643)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2643",
            ).WindowsHybridBridgeDebugFeatures_v2643)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2643",
          ).VoipWinRTBridge_v2643)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2643",
          ).WAWebWindowsHybridBridgeRateTheApp_v2643)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2643",
          ).WindowsHybridBridgeConnection_v2643)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2643",
          ).WindowsHybridBridgeTouchpadFix_v2643)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2643",
          ).WindowsHybridBridgeLinksPreview_v2643)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2643",
            ).WindowsHybridBridgeContacts_v2643)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2643",
            ).WindowsHybridBridgeContacts_v2643)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2643",
          ).WAWebWindowsHybridBridgeMediaFiles_v2643)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2643",
          ).WAWebWindowsHybridBridgeSharesheet_v2643)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2643",
          ).WindowsHybridAppActivationBridge_v2643)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2643",
          ).WindowsHybridBridgeNativeAppState_v2643)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2643",
          ).WindowsHybridBridgeSystemIntegrations_v2643)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2643",
          ).WindowsHybridBridgeBrowserExtensions_v2643)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2643",
          ).WindowsHybridBridgeSeamlessMigration_v2643)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2643",
          ).WindowsHybridBridgeMediaTranscoder_v2643)(e, E));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2643",
          ).WindowsHybridBridgeRingtone_v2643)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2643",
          ).WindowsHybridBridgeMetaConfig_v2643)(I)),
          this.metaConfig.initialize()),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2643 = e;
  },
  98,
);
