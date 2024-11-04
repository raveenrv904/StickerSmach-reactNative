import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string | null;
};

const ImageViewer = ({ imgSource, selectedImage }: Props) => {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  return <Image source={imageSource} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 540,
    borderRadius: 18,
  },
});
