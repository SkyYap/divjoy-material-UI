import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Newsletter from "components/Newsletter";

function NewsletterSection(props) {
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Grid
          container={true}
          alignItems="center"
          justifyContent="center"
          spacing={4}
        >
          <Grid item={true} xs={12} md={6}>
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={4}
            />
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <Newsletter
              buttonText={props.buttonText}
              buttonColor={props.buttonColor}
              inputPlaceholder={props.inputPlaceholder}
              subscribedMessage={props.subscribedMessage}
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default NewsletterSection;
