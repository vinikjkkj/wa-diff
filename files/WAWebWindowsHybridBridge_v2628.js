__d(
  "WAWebWindowsHybridBridge.v2628",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2628",
    "WAWebWindowsHybridBridgeAbProps.v2628",
    "WAWebWindowsHybridBridgeAdv.v2628",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2628",
    "WAWebWindowsHybridBridgeConnection.v2628",
    "WAWebWindowsHybridBridgeContacts.v2628",
    "WAWebWindowsHybridBridgeDebugFeatures.v2628",
    "WAWebWindowsHybridBridgeLinksPreview.v2628",
    "WAWebWindowsHybridBridgeMediaFiles.v2628",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2628",
    "WAWebWindowsHybridBridgeMetaConfig.v2628",
    "WAWebWindowsHybridBridgeNativeAppState.v2628",
    "WAWebWindowsHybridBridgeOds.v2628",
    "WAWebWindowsHybridBridgePictures.v2628",
    "WAWebWindowsHybridBridgePreferences.v2628",
    "WAWebWindowsHybridBridgeRateTheApp.v2628",
    "WAWebWindowsHybridBridgeRingtone.v2628",
    "WAWebWindowsHybridBridgeScalingControl.v2628",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2628",
    "WAWebWindowsHybridBridgeSharesheet.v2628",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2628",
    "WAWebWindowsHybridBridgeTouchpadFix.v2628",
    "WAWebWindowsHybridBridgeVoip.v2628",
    "WAWebWindowsHybridBridgeWam.v2628",
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
            "WAWebWindowsHybridBridgeAbProps.v2628",
          ).WindowsHybridBridgeAbProps_v2628)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2628",
          ).WindowsHybridBridgeWam_v2628)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2628",
          ).WindowsHybridBridgePreferences_v2628)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2628",
          ).WindowsHybridBridgeScalingControl_v2628)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2628",
          ).WindowsHybridBridgeOds_v2628)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2628",
          ).WindowsHybridBridgePictures_v2628)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2628",
            ).WindowsHybridBridgeDebugFeatures_v2628)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2628",
          ).VoipWinRTBridge_v2628)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2628",
          ).WAWebWindowsHybridBridgeRateTheApp_v2628)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2628",
          ).WindowsHybridBridgeConnection_v2628)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2628",
          ).WindowsHybridBridgeTouchpadFix_v2628)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2628",
          ).WindowsHybridBridgeLinksPreview_v2628)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2628",
            ).WindowsHybridBridgeContacts_v2628)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2628",
            ).WindowsHybridBridgeContacts_v2628)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2628",
          ).WAWebWindowsHybridBridgeMediaFiles_v2628)(h));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2628",
          ).WAWebWindowsHybridBridgeSharesheet_v2628)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2628",
          ).WindowsHybridAppActivationBridge_v2628)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2628",
          ).WindowsHybridBridgeNativeAppState_v2628)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2628",
          ).WindowsHybridBridgeSystemIntegrations_v2628)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2628",
          ).WindowsHybridBridgeBrowserExtensions_v2628)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2628",
          ).WindowsHybridBridgeSeamlessMigration_v2628)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2628",
          ).WindowsHybridBridgeMediaTranscoder_v2628)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2628",
          ).WindowsHybridBridgeAdv_v2628)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2628",
          ).WindowsHybridBridgeRingtone_v2628)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2628",
          ).WindowsHybridBridgeMetaConfig_v2628)(I)),
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
    l.WindowsHybridBridge_v2628 = e;
  },
  98,
);
