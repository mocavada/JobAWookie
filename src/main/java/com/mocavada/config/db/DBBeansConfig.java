package com.mocavada.config.db;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Configuration
@PropertySource("classpath:application.properties")
@Component("DBBeansConfig")
@Scope(value = "singleton")
public class DBBeansConfig {

    @Value("${db.mysql.config.url}")
    public String CONFIG_URL;

    //    @Value("${db.mysql.create.newusername}")
    public String NEW_USER;

    //    @Value("${db.mysql.create.newpassword}")
    public String NEW_PASSWORD;

    //    @Value("${db.mysql.create.schema}")
    public String SCHEMA;

    @Value("${spring.datasource.url}")
    public String CONNECTION_STATEMENT;

    @Value("${spring.datasource.username}")
    public String USERNAME;

    @Value("${spring.datasource.password}")
    public String PWD;

    @Value("${server.port}")
    public String SERVER_PORT;

//    @Bean
//    public static DBBeansConfig dbBeansConfig() {
//        return new DBBeansConfig();
//    }

}
