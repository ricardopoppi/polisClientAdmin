/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */


const helpers = {};

helpers.shouldShowPermissionsError = (props) => {
  return props.zid_metadata && !props.zid_metadata.is_owner && !props.zid_metadata.is_mod;
};


export default helpers;
