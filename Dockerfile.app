# 資材ビルド
FROM maven:3.9.4-eclipse-temurin-17 as backend-build

WORKDIR /build/backend
COPY ./backend .
RUN mvn clean install -DskipTests

# デプロイ
FROM openjdk:17-jdk
WORKDIR /app

COPY --from=backend-build /build/backend/target/oystersystem-0.0.1-SNAPSHOT.jar ./app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]